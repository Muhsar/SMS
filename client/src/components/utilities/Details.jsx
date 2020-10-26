import React from 'react';
import jwt_decode from 'jwt-decode'
const decode = localStorage.token ? jwt_decode(localStorage.token) : null

export const StudentInfo=({student})=>{
    return(
        <div class="modal fade" id="studentInfo" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div style={{color:'#fff'}} class="modal-content modal-lg border-0 modal-fluid">
            <div className="modal-header text-center">
            <div class="media">
            {
                          student.image==='no image' ? 
                          <div className="avatar avatar-xl bg-primary rounded-circle">
                            {student.surname.slice(0,1)}{student.name.slice(0,1)}
                          </div>
                          :
                        <div class="avatar-parent-child">
                          <img alt="" src={student.image} class="avatar  rounded-circle"/>
                        </div>
                        }
                                                  {/* <img class="align-self-center rounded-circle mr-3" style={{width:'85px', height:'85px'}} alt="" src={student.image}/> */}
                                              <div class="media-body">
                                                  <h2 class=" display-6">{student.surname+' '+student.name}</h2>
                                                  <p class="text-dark">{student.clas}</p>
                                              </div>
                                          </div>
            </div>
            <div class="modal-body text-dark">
            

                                      <ul class="list-group list-group-flush">
                                        {
                                          (student.department)?(
                                            <li class="list-group-item">
                                            <div className='row'>
                                            <div className='col'>Department:</div>
                                            <div className='col'>{student.department}</div>
                                            </div>
                                            </li>
                                          ):(
                                            <React.Fragment></React.Fragment>
                                          )
                                        }
                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Student's Identification Number:</div>
                                            <div className='col'>{student.student_id}</div>
                                          </div>
                                        </li>
                                          <li class="list-group-item">
                                            <div className='row'>
                                              <div className='col'>Gender:</div>
                                              <div className='col'>{student.gender}</div>
                                            </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Religion:</div>
                                            <div className='col'>{student.religion}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Date Of Birth:</div>
                                            <div className='col'>{student.date}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>State Of Origin:</div>
                                            <div className='col'>{student.state}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Local Government Area:</div>
                                            <div className='col'>{student.lga}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Address:</div>
                                            <div className='col'>{student.address}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Name:</div>
                                            <div className='col'>{student.pname}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Surname:</div>
                                            <div className='col'>{student.psurname}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Email Address:</div>
                                            <div className='col'>{student.email}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Mobile Number:</div>
                                            <div className='col'>{student.number}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Address:</div>
                                            <div className='col'>{student.paddress}</div>
                                          </div>
                                          </li>
                                      </ul>
                                      
            </div>
            </div>
            </div>
            </div>
    )
}