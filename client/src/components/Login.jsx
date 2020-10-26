import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ChangeType } from './utilities/Events'
import { OwnerLogin, TeacherLogin, ParentLogin } from './utilities/SignIn'
import axios from 'axios'
import { OwnerServer, TeacherServer, ParentServer } from '../servers';
class login extends Component {
  state={
    email:'',
    password:'',
    error:'',
    type:'owner',
    login:'',
    schoolEmail:''
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const user = this.state.type==='owner' ? {
      schoolEmail: this.state.schoolEmail,
      password: this.state.password
    } : {
      login: this.state.login,
      password: this.state.password
    }
    if(this.state.type==='owner'){
    axios.post(`${OwnerServer}/login`, user)
        .then(res => {
          (!res.data.error)?((localStorage.setItem('token', res.data))):this.setState({error:res.data.error})
          if(!res.data.error){
            window.location='/'
          }
        })
        .catch(err => {
            console.log(err)
        })
}else if(this.state.type==='teacher'){
axios.post(`${TeacherServer}/login`, user)
    .then(res => {
      (!res.data.error)?((localStorage.setItem('token', res.data))):this.setState({error:res.data.error})
      if(!res.data.error){
        window.location='/'
      }
    })
    .catch(err => {
        console.log(err)
    })
}
else{
axios.post(`${ParentServer}/login`, user)
    .then(res => {
      (!res.data.error)?((localStorage.setItem('token', res.data))):this.setState({error:res.data.error})
      if(!res.data.error){
        window.location='/'
      }
    })
    .catch(err => {
        console.log(err)
    })
}
  }
  owner=e=>{
    this.setState({type:'owner'})
  }
  teacher=e=>{
    this.setState({type:'teacher'})
  }
  guardian=e=>{
    this.setState({type:'guardian'})
  }
    render() {
        return (
          <div className="main-content position-relative">

<div class="page-content">
        <div class="min-vh-100 py-5 d-flex align-items-center">
          <div class="w-100">
            <div class="row justify-content-center">
              <div class="col-sm-8 col-lg-4">
                <div class="card shadow zindex-100 mb-0">
                  <div class="card-body px-md-5 py-5">
                    <div class="mb-5">
                      <h6 class="h3 text-center">Login <i class="far fa-sign-in-alt"></i></h6>
                      <p class="text-muted mb-0">Sign in to your account to continue.</p>
                    </div>
                    {
                      this.state.error ? 
                      <div className="alert alert-danger alert-dismissible">
                        <button className="btn btn-action-label" data-dismiss='alert'>&times;</button>
                        {this.state.error}</div>
                      : null
                    }
                    <span class="clearfix"></span>
                    {
                      this.state.type==='owner' ?
                      <OwnerLogin
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      />
                      :
                      this.state.type==='teacher' ?
                      <TeacherLogin
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      />
                      :
                      this.state.type==='guardian' ?
                      <ParentLogin
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
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
                  <div class="card-footer px-md-5"><small>Not registered?</small>
                    <Link to="/signup" class="small font-weight-bold">Create account</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        );
    }
}

export default login;
