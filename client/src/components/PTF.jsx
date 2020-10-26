import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import jwt_decode from 'jwt-decode'
import { getChat, addChat, typingState } from '../actions/actions';
import { PTFPage } from './utilities/Titles';
import io from 'socket.io-client'
import { PTFCards, PTFMessage } from './utilities/Cards';
import { AllChats } from './utilities/Tables';
import './chat.css'
import TopNav from './TopNav';
export class PTF extends Component {
    state={
        message:'',
        typing:false
      }
      
      componentDidMount() {
      this.props.getChat()
      const decode = jwt_decode(localStorage.token)
      let server = "http://localhost:5000";
      const school_id = decode.school_id
      this.socket = io(server, {query:{school_id}});
      
      this.socket.on("Output PTF", msg => {
          this.props.addChat(msg);
      });
      
      }
      handleChange=e=>{
        this.setState({message:e.target.value})
        const decode = jwt_decode(localStorage.token)
        const value = e.target.value
        this.socket.emit("Type Message", (decode.type==='owner' ? {name:decode.firstName,id:decode._id} : {name:decode.name,id:decode._id}))
        this.socket.on('Emit Message',msg=>{
          if(decode._id!==msg.id){
            this.setState({typing:value.length>0 ? true : false,typingMessage:msg.emitMessage})
            this.props.typingState(msg)
          }
        })
      }
      handleSubmit=e=>{
        e.preventDefault()
        const decode = jwt_decode(localStorage.token)
        const chat ={
          sender_id:decode._id,
          message:this.state.message,
          name:decode.name,
          school_id:decode.school_id
        }
        this.socket.emit('Input PTF', chat)
        this.setState({message:'',typing:'false'})
      }
      handleTyping=e=>{
        this.setState({typing:!this.state.typing})
      }
      componentDidUpdate() {
        const {chats} = this.props.chats
        if(chats.length){
        this.messagesEnd.scrollIntoView({ behavior: "smooth" })
        }
    }
    render() {
      const {chats} = this.props.chats
      const decode = jwt_decode(localStorage.token)
      const typing = this.props.typing
        return (
          <div className="main-content position-relative">
                <TopNav/>
            <div className='page-content'>
                <PTFPage/>
                <PTFCards chat={chats}/>
                <div className="row">
                  <div className="card col-md-10 mx-auto">
                    <AllChats chats={chats}/>
                    <div
                        ref={el => {
                            this.messagesEnd = el;
                        }}
                        style={{ float: "left", clear: "both" }}
                    />
                  <PTFMessage 
                  change={this.handleChange}
                  submit={this.handleSubmit}
                  state={this.state}
                  typing={this.handleTyping}
                  />
                  </div>
                </div>
            </div>
    <div class="sidenav-mask mask-body d-xl-none" data-action="sidenav-unpin" data-target="#sidenav-main"></div>

            </div>
        )
    }
}
PTF.propTypes = {
    chats: PropTypes.object.isRequired,
    getChat: PropTypes.func.isRequired,
    typingState: PropTypes.func.isRequired,
    typing: PropTypes.object.isRequired
  }
  const mapStateToProps= state => {
  return{
    chats: state.chats,
    typing: state.typing
  }
  }
  export default connect(mapStateToProps,{getChat, addChat, typingState})(PTF)
  