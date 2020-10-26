import React, { Component } from 'react'
import { TeacherCards, TeacherListHeader } from './utilities/Cards';
import { TeacherRegistration } from './utilities/RegisterModal';
import { TeacherPage } from './utilities/Titles';
import { TeacherList } from './utilities/Tables';
import { connect } from 'react-redux'
import { getTeachers, addTeacher, deleteTeacher, teacherDetail, updateTeacher } from '../actions/actions';
import { PropTypes } from 'prop-types';
import $ from 'jquery'
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import { OwnerServer } from '../servers';
import kR from './upload.png'
import { TeacherUpdate } from './utilities/UpdateModal';
import TopNav from './TopNav';
class Teachers extends Component {
  componentDidMount() {
    this.props.getTeachers()
  }
  state = {
    name:'',
    surname:'',
    clas:'',
    gender:'',
    address:'',
    email:'',
    number:'',
    modal:false,
    up:false,
    info:false,
    image: 'no image'
  }

  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleDepartment=e=>{
    this.setState({department:e.target.value})
  }
  handleSubmit=e=>{
    e.preventDefault()
    const decode = jwt_decode(localStorage.token)
    const teacher = {
      name:this.state.name,
      surname:this.state.surname,
      clas:this.state.clas,
      gender:this.state.gender,
      address:this.state.address,
      email:this.state.email,
      number:this.state.number,
      school_id:decode.school_id,
      image:this.state.image
    }
  this.props.addTeacher(teacher)
  this.props.getTeachers()
  }
  handleRemove=(id)=>{
    this.props.deleteTeacher(id)
    this.props.getTeachers()
  }
  handleUpdate=e=>{
    e.preventDefault()
    const {teacher} =this.props.teacher
    const decode = jwt_decode(localStorage.token)
    const update = {
      name:this.state.name,
      surname:this.state.surname,
      clas:this.state.clas,
      gender:this.state.gender,
      address:this.state.address,
      email:this.state.email,
      number:this.state.number,
      school_id:decode.school_id,
      image:this.state.image
    }
    this.props.updateTeacher(teacher.teacher_id,update)
    this.props.getTeachers()
  }
  handleToggle=()=>{
    this.setState({modal:!this.state.modal})
  }
  updateModal=()=>{
    this.setState({up:!this.state.up})
  }
  informationModal=()=>{
    this.setState({info:!this.state.info})
  }
  handleSearch=()=>{
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase()
        $("#myTeachers .myTeachers").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
      })
  }
  openTeacherInfo=id=>{
    this.props.teacherDetail(id)
    this.props.getTeachers()
    this.informationModal()
  }
  openUpdateModal=(id)=>{
    axios.get(`${OwnerServer}/teacher/`+id)
    .then(res=>{
      this.setState({
      name:res.data.name,
      surname:res.data.surname,
      clas:res.data.clas,
      gender:res.data.gender,
      address:res.data.address,
      email:res.data.email,
      number:res.data.number})
    })
    this.props.getTeachers()
    this.props.teacherDetail(id)
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
      const {teachers} = this.props.teachers
        return (
          <div className="main-content position-relative">
                <TopNav/>
            <div class="page-content">
                <TeacherRegistration
                submit={this.handleSubmit}
                change={this.handleChange}
                error={this.props.teachers.error}
                state={this.state}
                upload={this.uploadImage}
                image={this.imageUpload}
                kR={kR}
                msg={this.props.teachers.msg}
                />
                 <TeacherUpdate
                submit={this.handleUpdate}
                change={this.handleChange}
                state={this.state}
                upload={this.uploadImage}
                image={this.imageUpload}
                msg={this.props.teachers.msg}
                error={this.props.teachers.error}
                />
            <TeacherPage/>
        <TeacherCards teachers={teachers}/>
        <div class="card">
          <TeacherListHeader
          search={this.handleSearch}
          />
          
              <TeacherList
              teachers={teachers}
              update={this.openUpdateModal}
              remove={this.handleRemove}
              />
          
        </div>
        </div>
    <div class="sidenav-mask mask-body d-xl-none" data-action="sidenav-unpin" data-target="#sidenav-main"></div>

      </div>
        )
    }
}
Teachers.propTypes = {
  getTeachers:PropTypes.func.isRequired,
  teachers: PropTypes.object.isRequired,
  teacherDetail: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return{
    teachers:state.teachers,
    teacher:state.teacher
  }
}



export default connect(mapStateToProps, { getTeachers, addTeacher, deleteTeacher, teacherDetail, updateTeacher })(Teachers)