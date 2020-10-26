import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { OwnerRegistration, ParentRegistration, TeacherRegistration } from './utilities/Registeration'
import kR from './upload.png'
import $ from 'jquery'
import axios from 'axios'
import PropTypes from 'prop-types';
import { ChangeType } from './utilities/Events'
import { TeacherServer, ParentServer, OwnerServer } from '../servers'
import { connect } from 'react-redux'
import {studentAccount,teacherDetail} from '../actions/actions'
class SignUp extends Component {
  state={
    email:'',
    type:'owner',
    surname:'',
    student_id:'',
    password:'',
    reg:false,
    msg:'',
    error:'',
    status:'',
    clas:'',
    teacher_id:'',
    schoolName:'',
    image:'no image',
    logo:'no logo',
    schoolEmail:'',
    address:'',
    state:'',
    lga:'',
    firstName:'',
    lastName:'',
    ownerEmail:'',
    number:'',
    confirmPassword:'',
    passwordError:'',
    noLogo:false,
    nextStage:false
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleTeacherId=e=>{
    this.props.teacherDetail(e.target.value)
    this.setState({teacher_id:e.target.value,reg:true})
    const {teacher} = this.props.teacher
    console.log(teacher)
  }
  handleClass=e=>{
    const {teacher}=this.props.teacher
    if(teacher.clas===e.target.value){
      this.setState({clas:e.target.value,nextStage:true})
    }
    else{
      this.setState({nextStage:false})
    }
  }
  handlePassword=e=>{
    this.setState({confirmPassword:e.target.value})
    if(e.target.value !== this.state.password){
      this.setState({passwordError:'Passwords do not match'})
    }
    else if(e.target.value === this.state.password){
      this.setState({passwordError:''})
    }
    else if((e.target.value && this.state.password) === ''){
      this.setState({passwordError:''})
    }
  }
  handleSubmit=(e)=>{
    const {email,
    type,
    surname,
    student_id,
    password,
    reg,
    msg,
    error,
    status,
    clas,
    teacher_id,
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
    confirmPassword
  } = this.state
      e.preventDefault()
      const {teacher} = this.props.teacher
      const {student} = this.props.student
      const user = this.state.type==='teacher' ?(
      this.state.teacher_id===teacher.teacher_id ?
      {password:this.state.password}
      :
       this.setState({msg:"teacher doesn't exist check ur id and try again"}))
      :
      this.state.type==='guardian' ?(
      this.state.surname===student.surname ?
      {password:this.state.password}
      :
      this.setState({msg:"Surnames do not match"})
      ):
      this.state.type==='owner' ?
      {
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
        number
      }
      :
      null

      if(this.state.type==='teacher'){
      axios.post((`${TeacherServer}/signup/`+teacher.teacher_id),user)
       .then(res=>{
      if(res.data.error){
        this.setState({status:res.data.error})
      } else{
        this.props.history.push('/')
      }
      })
      }
      else if(this.state.type==='guardian'){
      axios.post((`${ParentServer}/signup/`+student.student_id),user)
       .then(res=>{this.setState({status:res.data})})
      this.props.history.push('/')
     }else if(this.state.type==='owner'){
       if(user.logo!==('no logo' && '')){
      axios.post(`${OwnerServer}/signup`,user)
       .then(res=>{this.setState({status:res.data})})
      this.props.history.push('/')
      } else{
        this.setState({noLogo:true})
      }
    }
  }
  handleId=e=>{
    this.props.studentAccount(e.target.value)
    this.setState({student_id:e.target.value})
  }
  checkId=e=>{
    const {student} = this.props.student
    e.preventDefault()
    if(student!==null){
    student.student_id!==this.state.student_id ? this.setState({reg:false, error:'No Student With that ID or the account has been registered'}) : this.setState({reg:true})}
    else if(this.state.student_id===''){
      this.setState({reg:false,error:"Input the Child's ID to continue registration"})
    }
    console.log((this.state.student_id).length)
  }
  owner=e=>{
    this.setState({error:'',reg:false,type:'owner'})
  }
  teacher=e=>{
    this.setState({error:'',reg:false,type:'teacher'})
  }
  guardian=e=>{
    this.setState({error:'',reg:false,type:'guardian'})
  }
  logoUpload=()=>{
  $('#newLogo').click()
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
  // axios.post('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',data)
  //   .then(res=>{
  //     this.setState({logo:res.data.secure_url})
  //   })
  const file = await res.json()
  this.setState({logo:file.secure_url})
  this.setState({logoLoading:false})
  console.log(file.secure_url)
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
    render() {
        return (
          <div className="main-content position-relative">

            <div class="page-content">
        <div class="min-vh-100 py-5 d-flex align-items-center">
          <div class="w-100">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="card shadow zindex-100 mb-0">
                  <div class="card-body px-md-5 py-5">
                    <div class="mb-5 text-center">
                      <h6 class="h1">Create account <i className='far fa-user-plus'/> </h6>
                    </div>
                    <span class="clearfix"></span>
                    {
      (this.state.status!=='')?(
        <div className='alert alert-danger'>{this.state.status}</div>
      ):(<div></div>)
      }
      {
      (this.state.error!=='')?(
        <div className='alert alert-danger'>{this.state.error}</div>
      ):(<div></div>)
      }
                    {
                      this.state.type==='owner' ?
                      <OwnerRegistration
                      kR={kR}
                      state={this.state}
                      submit={this.handleSubmit}
                      handleChange={this.handleChange}
                      handlePassword={this.handlePassword}
                      imageUpload={this.imageUpload}
                      uploadImage={this.uploadImage}
                      logoUpload={this.logoUpload}
                      uploadLogo={this.uploadLogo}
                      />
                      :
                      this.state.type==='teacher' ?
                      <TeacherRegistration
                      handleSubmit={this.handleSubmit}
                      handleTeacherId={this.handleTeacherId}
                      handleClass={this.handleClass}
                      state={this.state}
                      handleChange={this.handleChange}
                      />
                      :
                      this.state.type==='guardian' ?
                      <ParentRegistration
                      handleSubmit={this.handleSubmit}
                      state={this.state}
                      handleId={this.handleId}
                      checkId={this.checkId}
                      handleChange={this.handleChange}
                      />
                      : null
                    }
                  </div>
                  <ChangeType
                  teacher={this.teacher}
                  guardian={this.guardian}
                  owner={this.owner}
                  state={this.state}
                  />
                  <div class="card-footer px-md-5"><small>Already have an acocunt?</small>
                    <Link to="/" class="small font-weight-bold">Sign in</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        )
    }
}
SignUp.propTypes= {
  teacher: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired,
  teacherDetail: PropTypes.func.isRequired,
  studentAccount: PropTypes.func.isRequired
}
const mapStateToProps=state=>{
  return{
    teacher:state.teacher,
    student:state.student
  }
}
export default connect(mapStateToProps,{teacherDetail,studentAccount})(SignUp)