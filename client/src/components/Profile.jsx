import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UpdateNavs, UpdateTabContents } from './utilities/Cards'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { OwnerServer } from '../servers';
import { schoolDetail, changePassword, updateSchool } from '../actions/actions';
import $ from 'jquery'
import TopNav from './TopNav'
class Profile extends Component {
    state={
        error:'',
        msg:'',
        school_id:'',
        verifyDelete:'',
        newPassword:'',
        oldPassword:'',
        confirmPassword:'',
        deleteMessage:'',
        checkPassword:''
    }
    componentWillMount(){
        const decode = jwt_decode(localStorage.token)
        axios.get(`${OwnerServer}/`)
        .then(res=>{
            this.setState({
                password:res.data.password,
                clas:res.data.clas,
                schoolName:res.data.schoolName,
                image:res.data.image,
                logo:res.data.logo,
                schoolEmail:res.data.schoolEmail,
                address:res.data.address,
                state:res.data.state,
                lga:res.data.lga,
                firstName:res.data.firstName,
                lastName:res.data.lastName,
                ownerEmail:res.data.ownerEmail,
                number:res.data.number,
                school_id:res.data.school_id,
                created:res.data.created,
                type:res.data.type
            })
            const state= this.state
        })
        this.props.schoolDetail()
    }
    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleDelete=e=>{
        e.preventDefault()
        const decode = jwt_decode(localStorage.token)
        const {
            verifyDelete,
            checkPassword,
            school_id,
            password
        } = this.state
        if(verifyDelete.toLowerCase() !== 'delete my account'){
            this.setState({deleteMessage:'text must be in lower case or text does not match'})
        }
        
        
    }
    deleteAccount=()=>{
        const {school}=this.props.school
        if(!school){
            localStorage.removeItem('token')
            window.location = '/'
        } else{
            this.setState({error:this.props.school.error})
        }
    }
    handlepasswordUpdate=e=>{
        e.preventDefault()
        const {
            oldPassword,
            newPassword,
            confirmPassword
        } = this.state
        const passwords = {
            oldPassword,
            newPassword
        }
        
        if(newPassword!==confirmPassword){
            this.setState({passwordUpdateError:"Passwords do not Match"})
        }
        else{
            this.props.changePassword(passwords)
            this.props.schoolDetail()
        }

    }
    setNull=e=>{
        this.setState({passwordUpdateError:'',deleteMessage:''})
    }
    handleUpdate=e=>{
        e.preventDefault()
       const {
            password,
        clas,
        schoolName,
        image,
        logo,
        schoolEmail,
        address,
        state,
        lga,
        firstName,
        lastName,
        ownerEmail,
        number,
        school_id,
        created,
        type
    } = this.state
    const update = {
        clas,
        schoolName,
        image,
        logo,
        schoolEmail,
        address,
        state,
        lga,
        firstName,
        lastName,
        ownerEmail,
        number
}
this.props.updateSchool(update)
this.props.schoolDetail()
    }
    logoUpload=()=>{
        $('#updateLogo').click()
      }
      uploadLogo=async e =>{
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'jewbreel')
        this.setState({logoLoading:true})
        const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
        {
          method:'POST',
          body:data
        }
        )
        
        const file = await res.json()
        this.setState({logo:file.secure_url})
        this.setState({logoLoading:false})
        console.log(file.secure_url)
      }
      imageUpload=()=>{
        $('#updateImage').click()
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
    render() {
        const data = this.state.data
        const decode = jwt_decode(localStorage.token)
        const {school} = this.props.school
        const state = this.state
        console.log(state)
        return (
            <div className="main-content position-relative">
                <TopNav/>
            <div className='row page-content'>
               <div class="col-lg-10 mx-lg-auto order-lg-1">
            <div class="card">
              <div class="card-body">
              <UpdateNavs/>
              <br/>
              <hr/>
              <UpdateTabContents
              school={school}
              state={state}
              updateData={this.handleUpdate}
              msg={this.props.school.msg}
              error={this.props.school.error}
              updatePassword={this.handlepasswordUpdate}
              deleteAccount={this.handleDelete}
              change={this.handleChange}
              data={data}
              logoUpload={this.logoUpload}
              imageUpload={this.imageUpload}
              uploadLogo={this.uploadLogo}
              uploadImage={this.uploadImage}
              handleChange={this.handleChange}
              setNull={this.setNull}
              msg={this.props.school.msg}
              error={this.props.school.error}
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
Profile.propTypes={
    school:PropTypes.object.isRequired,
    schoolDetail:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    school:state.school
})
export default connect(mapStateToProps, {schoolDetail,changePassword,updateSchool})(Profile)
