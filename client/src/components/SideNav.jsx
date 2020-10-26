import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
export default class sidenav extends Component {
  logOut=()=>{
    localStorage.removeItem('token')
    window.location= '/'
  }
    render() {
      const decode = jwt_decode(localStorage.token)
        return (
            <div className="sidenav show" id="sidenav-main">
      <div className="sidenav-header d-flex align-items-center">
        <Link className="navbar-brand" to='/'>
          {/* <img src="../..//img/brand/white.png" className="navbar-brand-img" alt="..."/> */}
          <h4 className='text-white' style={{fontSize:'24px',fontFamily:'cursive'}}><i className='far fa-graduation-cap'/> {' '}SMS</h4>
        </Link>
        <div className="ml-auto">
          <div className="sidenav-toggler sidenav-toggler-dark d-md-none active" data-action="sidenav-unpin" data-target="#sidenav-main">
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line bg-white"></i>
              <i className="sidenav-toggler-line bg-white"></i>
              <i className="sidenav-toggler-line bg-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="sidenav-user d-flex flex-column align-items-center justify-content-between text-center">
        <div>
          <Link to='/profile' className="avatar  avatar-xl">
            <img alt="" src={decode.logo} className=""/>
          </Link>
          <div className="mt-4">
            <h5 className="mb-0 text-white">{decode.schoolName}</h5>
            <span className="d-block text-sm text-white opacity-8 mb-3">{decode.school_id}</span>
            <a href="#" className="btn btn-sm btn-white btn-icon rounded-pill shadow hover-translate-y-n3">
              <span className="btn-inner--icon"><i className="far fa-user-graduate"></i></span>
              <span className="btn-inner--text">{decode.clas}</span>
            </a>
          </div>
        </div>
        <div className="w-100 mt-4 actions d-flex justify-content-between">
          <Link to="/teachers" className="action-item action-item-lg text-white pl-0">
            <i className="far fa-user-tie"></i>
          </Link>
          <Link to="/ptf" className="action-item action-item-lg text-white">
            <i className="far fa-comment-alt-dots"></i>
          </Link>
          <Link to="/students" className="action-item action-item-lg text-white pr-0">
            <i className="far fa-user-graduate"></i>
          </Link>
        </div>
      </div>
      <div className="nav-application clearfix">
        <NavLink to="/profile" className="btn btn-square text-sm">
          <span className="btn-inner--icon d-block"><i className="far fa-home fa-2x"></i></span>
          <span className="btn-inner--icon d-block pt-2">Home</span>
        </NavLink>
        <NavLink to="/students" className="btn btn-square text-sm">
          <span className="btn-inner--icon d-block"><i className="far fa-user-graduate fa-2x"></i></span>
          <span className="btn-inner--icon d-block pt-2">Students</span>
        </NavLink>
        <NavLink to="/teachers" className="btn btn-square text-sm">
          <span className="btn-inner--icon d-block"><i className="far fa-user-tie fa-2x"></i></span>
          <span className="btn-inner--icon d-block pt-2">Teachers</span>
        </NavLink>
        <NavLink to="/news" className="btn btn-square text-sm">
          <span className="btn-inner--icon d-block"><i className="far fa-newspaper fa-2x"></i></span>
          <span className="btn-inner--icon d-block pt-2">News</span>
        </NavLink>
        <NavLink to="/bills" className="btn btn-square text-sm">
          <span className="btn-inner--icon d-block"><i className="far fa-money-bill fa-2x"></i></span>
          <span className="btn-inner--icon d-block pt-2">Bills</span>
        </NavLink>
        <NavLink to="/ptf" className="btn btn-square text-sm">
          <span className="btn-inner--icon d-block"><i className="far fa-comment-alt-dots fa-2x"></i></span>
          <span className="btn-inner--icon d-block pt-2">PTF</span>
        </NavLink>
        <NavLink to="/debt" className="btn btn-square text-sm">
          <span className="btn-inner--icon d-block"><i className="far fa-money-bill-wave-alt fa-2x"></i></span>
          <span className="btn-inner--icon d-block pt-2">Fee Management</span>
        </NavLink>
        <Link type='button' onClick={this.logOut} className="btn btn-square text-sm">
          <span className="btn-inner--icon d-block"><i className="far fa-sign-out-alt fa-2x"></i></span>
          <span className="btn-inner--icon d-block pt-2">Log Out</span>
        </Link>
      </div>
      
    </div>
        )
    }
}
