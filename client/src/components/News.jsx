import React, { Component } from 'react'
import { NewsCards, NewsFeedHeader } from './utilities/Cards'
import { AllNews } from './utilities/Tables'
import { NewsPage } from './utilities/Titles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import $ from 'jquery'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { addNews, getNews, newsDetail, deleteNews, updateNews, sortNews } from '../actions/actions';
import io from 'socket.io-client';
import { UploadNews } from './utilities/RegisterModal'
import kR from './upload.png'
import { UpdateNews } from './utilities/UpdateModal'
import { OwnerServer } from '../servers';
import TopNav from './TopNav'

class News extends Component {
    
  componentDidMount() {
      this.props.getNews()
      const decode = jwt_decode(localStorage.token)
  let server = "http://localhost:5000";
  const school_id = decode.school_id
  this.socket = io(server, {query:{school_id}});
  
  this.socket.on("viewNotice", info => {
      this.props.addNews(info);
  });
  }
  state={
    title:'',
    content:'',
    image:'no image',
    modal: false
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
sortOldest=e=>{
    this.props.sortNews()
}
sortNewest=e=>{
    this.props.getNews()
}
  handleSubmit=e=>{
    e.preventDefault()
    var d = new Date();
    var day = d.getDate()
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var month = months[d.getMonth()];
    const decode = jwt_decode(localStorage.token)
    const info = {
      title:this.state.title,
      content:this.state.content,
      image:this.state.image,
      school_id:decode.school_id,
      day,
      month,
      sender_id: decode._id,
      image: this.state.image==='no image' ? decode.logo : this.state.image
    }
    this.socket.emit('uploadNotice', info)
    this.handleToggle()
    this.setState({
      title:' ',
      content:' ',
      msg:'News Upload Successful',
      image:'no image'
    })
  }
  handleToggle=()=>{
    this.setState({modal:!this.state.modal})
  }
  imageUpload=()=>{
    $('#newImage').click()
  }
  uploadImage=async e =>{
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'jewbreel')
    this.setState({imageLoading:true})
    const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
    {
      method:'POST',
      body:data
    }
    )
    const file = await res.json()
    this.setState({image:file.secure_url})
    this.setState({imageLoading:false})
    console.log(file.secure_url)
  }
  handleDelete=id=>{
      this.props.deleteNews(id)
      this.props.getNews()
  }
  openUpdateModal=(id)=>{
    axios.get(`${OwnerServer}/news/`+id)
    .then(res=>{
      this.setState({
        image:res.data.image,
        title:res.data.title,
        content:res.data.content
          })
        })
    this.props.newsDetail(id)
    this.props.getNews()
    console.log('modal A clicked')
  }
  handleUpdate=e=>{
    e.preventDefault()
    const {info} = this.props.info
    const news = {
      image:this.state.image,
      title:this.state.title,
      content:this.state.content
    }
    this.props.updateNews(info._id, news)
    this.props.getNews()
    this.setState({msg:' News updated successfull'})
    
}
handleSearch=()=>{
    $("#mySearch").on("keyup", function() {
      var value = $(this).val().toLowerCase()
      $("#myNews .card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      })
    })
}
    render() {
        const {news} = this.props.news
        const {info} = this.props.info
        console.log(this.props)
        return (
          <div className="main-content position-relative">
                <TopNav/>
            <div class="page-content">
                <NewsPage/>
                <NewsCards news={news}/>
                <UploadNews
                state={this.state}
                submit={this.handleSubmit}
                upload={this.uploadImage}
                image={this.imageUpload}
                change={this.handleChange}
                kR={kR}
                />
                <UpdateNews
                state={this.state}
                submit={this.handleUpdate}
                upload={this.uploadImage}
                image={this.imageUpload}
                change={this.handleChange}
                />
                <div class="card">
                    <NewsFeedHeader
                    newest={this.sortNewest}
                    oldest={this.sortOldest}
                    search={this.handleSearch}
                    />
                    <div className='row'>
                        <div className='col-md-8 mx-auto' id='myNews'>
                    <AllNews
                    news={news}
                    remove={this.handleDelete}
                    update={this.openUpdateModal}
                    />
                        </div>
                    </div>
                </div>
            </div>
    <div class="sidenav-mask mask-body d-xl-none" data-action="sidenav-unpin" data-target="#sidenav-main"></div>

            </div>
        )
    }
}

News.propTypes = {
    getNews: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired,
    newsDetail: PropTypes.func.isRequired,
    sortNews: PropTypes.func.isRequired
  }
  const mapStateToProps= state =>{
      return{
        news:state.news,
        info:state.info
      }
  }


export default connect(mapStateToProps, { addNews, getNews, newsDetail, deleteNews, updateNews, sortNews })(News)