import React from 'react';
import jwt_decode from 'jwt-decode'
const decode = localStorage.token ? jwt_decode(localStorage.token) : null
export const StudentPage = ({}) =>{
    return(
        <div class="page-title">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
              <div class="d-inline-block">
                <h5 class="h4 d-inline-block font-weight-400 mb-0 text-white">Students</h5>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
              <a href="#registerStudent" class="btn btn-sm btn-white btn-icon-only rounded-circle ml-4" data-toggle="modal">
                <span class="btn-inner--icon"><i class="far fa-plus"></i></span>
              </a>
              
            </div>
          </div>
        </div>
    )
}
export const TeacherPage = ({}) =>{
  return(
    <div class="page-title">
    <div class="row justify-content-between align-items-center">
      <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
        <div class="d-inline-block">
          <h5 class="h4 d-inline-block font-weight-400 mb-0 text-white">Teachers</h5>
        </div>
       
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
        
        <a href="#registerTeacher" class="btn btn-sm btn-white btn-icon-only rounded-circle ml-4" data-toggle="modal">
          <span class="btn-inner--icon"><i class="far fa-plus"></i></span>
        </a>
      </div>
    </div>
  </div>
  )
}
export const BillsPage = ({}) =>{
  return(
    <div class="page-title">
    <div class="row justify-content-between align-items-center">
      <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
        <div class="d-inline-block">
          <h5 class="h4 d-inline-block font-weight-400 mb-0 text-white">Bills</h5>
        </div>
        
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
        
        <a href="#addBill" class="btn btn-sm btn-white btn-icon-only rounded-circle ml-4" data-toggle="modal">
          <span class="btn-inner--icon"><i class="far fa-plus"></i></span>
        </a>
      </div>
    </div>
  </div>
  )
}
export const NewsPage = ({}) =>{
  return(
      <div class="page-title">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
            <div class="d-inline-block">
              <h5 class="h4 d-inline-block font-weight-400 mb-0 text-white">Notice/News</h5>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
            
            <a href="#addNews" class="btn btn-sm btn-white btn-icon-only rounded-circle ml-4" data-toggle="modal">
              <span class="btn-inner--icon"><i class="far fa-plus"></i></span>
            </a>
            
          </div>
        </div>
      </div>
  )
}
export const PTFPage = ({}) =>{
  return(
      <div class="page-title">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-6 mx-auto text-center d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
            <div class="d-inline-block">
              <h5 class="h4 d-inline-block font-weight-400 mb-0 text-white">Parent's and Teacher's Forum</h5>
            </div>
          </div>
        </div>
      </div>
  )
}