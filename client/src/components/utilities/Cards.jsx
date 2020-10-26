import { Link } from 'react-router-dom';
import React from 'react';
import jwt_decode from 'jwt-decode'
import { ResultTable } from './Tables';
import { PasswordUpdate, SchoolUpdate } from './UpdateModal';
import CountUp from 'react-countup';
const decode = localStorage.token ? jwt_decode(localStorage.token) : null
export const StudentCards=({students})=>{
    return(
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h6 class="text-muted mb-1">Students</h6>
                    <span class="h5 font-weight-bold mb-0"><CountUp end={students.length} duration={7}/></span>
                  </div>
                  <div class="col-auto">
                    <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                      <i class="far fa-user-graduate"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export const StudentReceipt=({receipt,student})=>{
  return(
    <>
    {
      receipt.length ? receipt.map(receipt=>{
        return(
          <div class="card hover-shadow-lg align-content-center">
              <div class="card-header border-0">
                <div class="row align-items-center">
                <div class="media mt-4 align-items-center mx-auto">
                
                  <img alt="" src={decode.logo} class="avatar avatar-lg"/>
                  <div class="media-body pl-3">
                    <div class="text-lg text-center my-0">{decode.schoolName}</div>
                  </div>
                </div>
                </div>
              </div>
              <div class="card-body pt-0">
                <div class="p-3 border border-dashed">
                  
              <div class="row align-items-center">
                <div class="media mt-4 align-items-center col">
                {
                  student.image==='no image' ? 
                  <div className='bg-primary avatar rounded-circle avatar-lg'>
                  {student.surname.slice(0,1)} {student.name.slice(0,1)}
                  </div>
                  : 
                  <img alt="" src={student.image} class="avatar avatar-lg"/>
                }
                  <div class="media-body pl-3">
                    <div class="text-lg my-0">{student.surname} {student.name}</div>
                  </div>
                </div>
                
                  <div class="col text-muted font-weight-600 text-center">School Fee: #{receipt.fees}</div>
                </div>
                  <div class="row align-items-center mt-3">
                    <div class="col-6 text-center">
                      <h6 class="mb-0">#{receipt.paidAmount}</h6>
                      <span class="text-sm text-muted">Amount Paid</span>
                    </div>
                    <div class="col-6 text-center">
                      <h6 class="mb-0">{receipt.day}-{receipt.month}-{receipt.year}</h6>
                      <span class="text-sm text-muted">Date</span>
                    </div>
                  </div>
                  <div class="row align-items-center mt-3">
                    <div class="col-6 text-center">
                      <h6 class="mb-0">#{receipt.amountPaid}</h6>
                      <span class="text-sm text-muted">Total Amount Paid</span>
                    </div>
                    <div class="col-6 text-center">
                      <h6 class="mb-0">#{receipt.fees - receipt.amountPaid}</h6>
                      <span class="text-sm text-muted">Amount Left</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
        )
      })
      : null
    }
    </>
    
  )
}
export const StudentDebt=({debtor,student,state,handleChange,handleSubmit})=>{
  return(
    <div class="card hover-shadow-lg">
                <div class="card-body text-center"><a href="#" class="avatar rounded-circle avatar-lg hover-translate-y-n3">
                {
                  student.image==='no image' ? 
                  <div className='bg-primary avatar rounded-circle avatar-lg'>
                  {student.surname.slice(0,1)} {student.name.slice(0,1)}
                  </div>
                  : 
                  <img alt="" src={student.image} class=""/>
                }
                </a>
                <h5 class="h6 my-4"><a href="#">{student.surname} {student.name}</a></h5>
                
                <ul class="list-group list-group-flush">

                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Student's Identification Number:</div>
                                            <div className='col'>{debtor.student_id}</div>
                                          </div>
                                        </li>
                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>{debtor.clas} School Fees</div>
                                            <div className='col'>#{debtor.fees}</div>
                                          </div>
                                        </li>
                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Status</div>
                                            <div className='col'>{debtor.feeStatus}</div>
                                          </div>
                                        </li>
                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Amount Left</div>
                                            <div className='col'>#{debtor.fees - debtor.amountPaid}</div>
                                          </div>
                                        </li>
                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Amount Paid</div>
                                            <div className='col'>#{debtor.amountPaid}</div>
                                          </div>
                                        </li>
                                        {
                                          (state.status)?(
                                            <div className='alert alert-info'>{state.name} has balanced {student.gender==='Male'?'his':'her'} school fees <Link to='/debtors'>Go back to Debtors Page</Link></div>
                                          ):(
                                            <form onSubmit={handleSubmit}>
                                            <li class="list-group-item">
                                            <div className='row'>
                                            <div className='col'>Increase Amount Paid</div>
                                            <div className='col'><input onChange={handleChange} placeholder="Enter Amount Paid" type="number" name="amountPaid" class="form-control"/></div>
                                            </div>
                                            </li>
                                            <li class="list-group-item">
                                            <button type="submit" class="btn btn-outline-primary btn-sm btn-block">
                                            <i class="fa fa-dot-circle-o"></i> Submit
                                            </button>
                                            </li>
                                            </form>
                                          )
                                        }
                                        {
                                          state.payment===true ? <div className='alert alert-success'>Payment Successful</div>
                                          :
                                          <div></div>
                                        }
                                      </ul>
              </div>

              
            </div>
  )
}
export const StudentListHeader=({search})=>{
    return(
        <div class="card-header actions-toolbar border-0">
            <div class="actions-search" id="actions-search">
              <div class="input-group input-group-merge input-group-flush">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-transparent"><i class="far fa-search"></i></span>
                </div>
                <input id='myInput' onChange={search} type="text" class="form-control form-control-flush" placeholder="Type and hit enter ..."/>
                <div class="input-group-append">
                  <a href="#" class="input-group-text bg-transparent" data-action="search-close" data-target="#actions-search"><i class="far fa-times"></i></a>
                </div>
              </div>
            </div>
            <div class="row justify-content-between align-items-center">
              <div class="col">
                <h6 class="d-inline-block mb-0">Students</h6>
              </div>
              <div class="col text-right">
                <div class="actions"><a href="#" class="action-item mr-3" data-action="search-open" data-target="#actions-search"><i class="far fa-search"></i></a>
                  <div class="dropdown mr-3">
                    <a href="#" class="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="far fa-filter"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">
                        <i class="far fa-sort-amount-down"></i>Newest
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="far fa-sort-alpha-down"></i>From A-Z
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="far fa-sort-alpha-up"></i>From Z-A
                      </a>
                    </div>
                  </div>
                  <div class="dropdown" data-toggle="dropdown">
                    <a href="#" class="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="far fa-ellipsis-h"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a href="#" class="dropdown-item">Refresh</a>
                      <a href="#" class="dropdown-item">Manage Widgets</a>
                      <a href="#" class="dropdown-item">Settings</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
export const NewsCards=({news})=>{
  return(
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h6 class="text-muted mb-1">Uploaded News</h6>
                  <span class="h5 font-weight-bold mb-0"><CountUp end={news.length} duration={7}/></span>
                </div>
                <div class="col-auto">
                  <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                    <i class="far fa-newspaper"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export const NewsFeedHeader=({newest,oldest,search})=>{
  return(
      <div class="card-header actions-toolbar border-0">
          <div class="actions-search" id="actions-search">
            <div class="input-group input-group-merge input-group-flush">
              <div class="input-group-prepend">
                <span class="input-group-text bg-transparent"><i class="far fa-search"></i></span>
              </div>
              <input type="text" id='mySearch' onChange={search} class="form-control form-control-flush" placeholder="Type and hit enter ..."/>
              <div class="input-group-append">
                <a href="#" class="input-group-text bg-transparent" data-action="search-close" data-target="#actions-search"><i class="far fa-times"></i></a>
              </div>
            </div>
          </div>
          <div class="row justify-content-between align-items-center">
            <div class="col">
              <h6 class="d-inline-block mb-0">News</h6>
            </div>
            <div class="col text-right">
              <div class="actions">
                <a href="#" class="action-item mr-3" data-action="search-open" data-target="#actions-search"><i class="far fa-search"></i></a>
                <div class="dropdown mr-3">
                  <a href="#" class="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="far fa-filter"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <Link class="dropdown-item" to="#" onClick={newest}>
                      <i class="far fa-sort-amount-down"></i>Newest
                    </Link>
                    <Link class="dropdown-item" to="#" onClick={oldest}>
                      <i class="far fa-sort-amount-up"></i>Oldest
                    </Link>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
  )
}
export const TeacherCards=({teachers})=>{
  return(
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h6 class="text-muted mb-1">Teachers</h6>
                  <span class="h5 font-weight-bold mb-0"><CountUp end={teachers.length} duration={7}/></span>
                </div>
                <div class="col-auto">
                  <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                    <i class="far fa-user-tie"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export const BillsCard=({bill})=>{
  return(
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h6 class="text-muted mb-1">Bills</h6>
                  <span class="h5 font-weight-bold mb-0"><CountUp end={bill.length} duration={7}/></span>
                </div>
                <div class="col-auto">
                  <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                    <i class="far fa-money-bill-wave-alt"></i>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}
export const TeacherListHeader=({search})=>{
  return(
      <div class="card-header actions-toolbar border-0">
          <div class="actions-search" id="actions-search">
            <div class="input-group input-group-merge input-group-flush">
              <div class="input-group-prepend">
                <span class="input-group-text bg-transparent"><i class="far fa-search"></i></span>
              </div>
              <input type="text" onChange={search} id='myInput' class="form-control form-control-flush" placeholder="Type and hit enter ..."/>
              <div class="input-group-append">
                <a href="#" class="input-group-text bg-transparent" data-action="search-close" data-target="#actions-search"><i class="far fa-times"></i></a>
              </div>
            </div>
          </div>
          <div class="row justify-content-between align-items-center">
            <div class="col">
              <h6 class="d-inline-block mb-0">Teachers</h6>
            </div>
            <div class="col text-right">
              <div class="actions"><a href="#" class="action-item mr-3" data-action="search-open" data-target="#actions-search"><i class="far fa-search"></i></a>
               
              </div>
            </div>
          </div>
        </div>
  )
}
export const BillHeader=({search})=>{
  return(
      <div class="card-header actions-toolbar border-0">
          <div class="actions-search" id="actions-search">
            <div class="input-group input-group-merge input-group-flush">
              <div class="input-group-prepend">
                <span class="input-group-text bg-transparent"><i class="far fa-search"></i></span>
              </div>
              <input type="text" onChange={search} id='mySearch' class="form-control form-control-flush" placeholder="Type and hit enter ..."/>
              <div class="input-group-append">
                <a href="#" class="input-group-text bg-transparent" data-action="search-close" data-target="#actions-search"><i class="far fa-times"></i></a>
              </div>
            </div>
          </div>
          <div class="row justify-content-between align-items-center">
            <div class="col">
              <h6 class="d-inline-block mb-0">Bills</h6>
            </div>
            <div class="col text-right">
              <div class="actions"><a href="#" class="action-item mr-3" data-action="search-open" data-target="#actions-search"><i class="far fa-search"></i></a>
                <div class="dropdown mr-3">
                  <a href="#" class="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="far fa-filter"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">
                      <i class="far fa-sort-amount-down"></i>Newest
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="far fa-sort-alpha-down"></i>From A-Z
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="far fa-sort-alpha-up"></i>From Z-A
                    </a>
                  </div>
                </div>
                <div class="dropdown" data-toggle="dropdown">
                  <a href="#" class="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="far fa-ellipsis-h"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="#" class="dropdown-item">Refresh</a>
                    <a href="#" class="dropdown-item">Manage Widgets</a>
                    <a href="#" class="dropdown-item">Settings</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
export const StudentResult=({student,result,testtotal,examtotal,totalresult,percentage,term})=>{
  return(
    <div className="card">
      <div class="card-header user-header alt bg-gradient-dark">
      <div class="media">
        {
          student.image==='no image' ? 
          <div className='bg-primary avatar rounded-circle avatar-lg mr-3'>
          {student.surname.slice(0,1)} {student.name.slice(0,1)}
          </div>
          :
      <img class="align-self-center mr-3 avatar avatar-lg" alt="" src={student.image}/>
        }
      <div class="media-body">
      <h2 class="text-light display-6">{student.surname+' '+student.name} <span className='float-right'>{term} </span></h2>
      <p class="text-light">{student.clas}</p>
      </div>
      </div>
      </div>
      <div class=" table-responsive">
      <table class="table table-borderless table-striped table-earning" style={{width:'100%'}}>
      <thead>
      <tr>

      <th colspan='2'>Subjects</th>
      <th colspan='1'>40</th>
      <th colspan='1'>60</th>
      <th colspan='1' class="text-right">100</th>
      <th colspan='1' class="text-right">Grade</th>
      <th colspan='2' class="text-right">Remarks</th>

      </tr>
      </thead>
      <tbody>
      <ResultTable
      result={result}/>

      <tr>
      <td colspan='13'><hr/>
      <hr/></td>
      </tr>
      <tr>
      <td colspan='2'>Total</td>
      <td colspan='1'>{testtotal}</td>
      <td colspan='1'>{examtotal}</td>
      <td class="text-right" colspan='1'>{totalresult}</td>
      <td class="text-right" colspan='3'>Percentage: {percentage}%</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br/>
    </div>
  )
}
export const PTFCards=({chat})=>{
  return(
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h6 class="text-muted mb-1">Total Texts</h6>
                  <span class="h5 font-weight-bold mb-0"><CountUp end={chat.length} duration={7}/></span>
                </div>
                <div class="col-auto">
                  <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                    <i class="far fa-comment-alt-dots"></i>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}
export const PTFMessage=({submit,change,state,typing})=>{
  return(
    <form onSubmit={submit} className='mt-5'>
      <div className="form-group">
        <div className="input-group">
        <input type="text" value={state.message} name="message" onChange={change} className='form-control form-control-emphasized'/>
          <div className="input-group-append">
        <button type='submit' className="btn btn-outline-primary">
          <i className="far fa-location-arrow">
            </i>
            </button>
          </div>
        </div>
            </div>
    </form>
  )
}
export const UpdateNavs=({})=>{
  return(
    <nav class="nav nav-pills nav-pills-icon nav-justified">
    <a class="nav-item nav-link py-3 active" data-toggle='tab' href="#data">
    <span class="d-block">
            <i class="far fa-user fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">Profile</span>
    </a>
    <a  class="nav-item nav-link py-3" data-toggle='tab' href="#setting">
    <span class="d-block">
            <i class="far fa-cog fa-spin fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">Setting</span>
    </a>
    <a class="nav-item nav-link py-3" data-toggle='tab' href="#password">
    <span class="d-block">
            <i class="far fa-asterisk fa-2x"/>
            <i class="far fa-asterisk fa-2x"/>
            <i class="far fa-asterisk fa-2x"/>
        </span>
        <span class="d-none d-sm-block mt-2">Password</span>
    </a>
    
</nav>
  )
}
export const UpdateTabContents=({school,state,msg,error,updatePassword,setNull,deleteAccount,change,updateData,logoUpload,
  uploadLogo,
  imageUpload,
  uploadImage,
  handleChange,
  handlePassword
  })=>{
  return(
    <div class="tab-content">
  <div class="tab-pane container active" id="data">
    <ProfileData school={school}/>
  </div>
  <div class="tab-pane container fade" id="setting">
    <SchoolUpdate
    school={school}
    logoUpload={logoUpload}
  uploadLogo={uploadLogo}
  imageUpload={imageUpload}
  uploadImage={uploadImage}
  handleChange={handleChange}
  handlePassword={handlePassword}
  state={state}
  updateData={updateData}
  msg={msg}
  error={error}
    />
  </div>
  <div class="tab-pane container fade" id="password">
      <PasswordUpdate
      state={state}
      msg={msg}
      error={error}
      updatePassword={updatePassword}
      deleteAccount={deleteAccount}
      change={change}
      setNull={setNull}
      />
  </div>
</div>
  )
}
export const ProfileData=({school})=>{
  return(
    <div class="card card-profile ">
    <div class="card-profile-cover">
        <img alt="" src={school.logo} class="card-img-top"/>

    </div>
    <a href="#" class="mx-auto">
        {
            school.image==='no image' ? 
            <div className="card-profile-image avatar  bg-primary rounded-circle shadow hover-shadow-lg">
                <h1 className='text-white'>
                    {decode.firstName.slice(0,1)+decode.lastName.slice(0,1)}
                    </h1>
            </div>
            :
        <img alt="" src={school.image} class="card-profile-image avatar rounded-circle shadow hover-shadow-lg"/>
        }
    </a>
    <div class="card-body p-3 pt-0 text-center">
        <h5 class="mb-0">{school.firstName+' '+school.lastName}</h5>
        <span class="d-block text-muted mb-3">{school.school_id}</span>
        <div class="card-group">
<div class="card px-4 py-5 border-primary hover-shadow-lg hover-translate-y-n10">
    <div class="card-body">
      <h5 className="h4">School</h5>
    <div className="row m-lg-5 hover-shadow-lg hover-translate-y-n10">
          <div className="col mx-auto">
          <span class="d-block">
            <i class="far fa-school fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">{school.schoolName}</span>
          </div>
        </div>
        <hr/>
        <div className="row m-lg-5 hover-shadow-lg hover-translate-y-n10">
          <div className="col mx-auto">
          <span class="d-block">
            <i class="far fa-mail-bulk fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">{school.schoolEmail}</span>
          </div>
        </div>
        <hr/>
        <div className="row m-lg-5  hover-shadow-lg hover-translate-y-n10">
          <div className="col mx-auto">
          <span class="d-block">
            <i class="far fa-id-card-alt fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">{school.school_id}</span>
          </div>
        </div>
        <hr/>
        <div className="row m-lg-5  hover-shadow-lg hover-translate-y-n10">
          <div className="col mx-auto">
          <span class="d-block">
            <i class="far fa-map-marked fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">{school.state} State</span>
        <span class="d-none d-sm-block mt-2">{school.lga} LGA</span>
        <span class="d-none d-sm-block mt-2">{school.address}</span>
          </div>
        </div>
    </div>
</div>

<div class="card border-dark px-4 py-5 hover-shadow-lg hover-translate-y-n10">
    <div class="card-body">
      <h5 className="h4">Owner</h5>
    <div className="row m-lg-5 hover-shadow-lg hover-translate-y-n10">
          <div className="col mx-auto">
          <span class="d-block">
            <i class="far fa-user-alt fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">{school.firstName+' '+school.lastName}</span>
          </div>
        </div>
        <hr/>
        <div className="row m-lg-5  hover-shadow-lg hover-translate-y-n10">
          <div className="col mx-auto">
          <span class="d-block">
            <i class="far fa-mail-bulk fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">{school.ownerEmail}</span>
          </div>
        </div>
        <hr/>
        <div className="row m-lg-5  hover-shadow-lg hover-translate-y-n10">
          <div className="col mx-auto">
          <span class="d-block">
            <i class="far fa-mobile-android fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">(+234) {school.number}</span>
          </div>
        </div>
        <hr/>
        <div className="row m-lg-5  hover-shadow-lg hover-translate-y-n10">
          <div className="col mx-auto">
          <span class="d-block">
            <i class="far fa-map-marked fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">{school.state} State</span>
        <span class="d-none d-sm-block mt-2">{school.lga} LGA</span>
        <span class="d-none d-sm-block mt-2">{school.address}</span>
          </div>
        </div>
    </div>
</div>

</div>
        
    </div>
</div>
  )
}
export const ManagementNavs=({})=>{
  return(
    <nav class="nav nav-pills nav-pills-icon nav-justified">
    <a class="nav-item nav-link py-3 active" data-toggle='tab' href="#line">
    <span class="d-block">
            <i class="far fa-chart-line fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">Line Chart</span>
    </a>
    <a  class="nav-item nav-link py-3" data-toggle='tab' href="#bar">
    <span class="d-block">
            <i class="far fa-chart-bar fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">Bar Chart</span>
    </a>
    <a class="nav-item nav-link py-3" data-toggle='tab' href="#table">
    <span class="d-block">
            <i class="far fa-list-alt fa-2x"/>
        </span>
        <span class="d-none d-sm-block mt-2">Table</span>
    </a>
    <a class="nav-item nav-link py-3" data-toggle='tab' href="#payment">
    <span class="d-block">
            <i class="far fa-th-list fa-2x"/>
        </span>
        <span class="d-none d-sm-block mt-2">Payment History</span>
    </a>
</nav>
  )
}
export const InvoiceManagement=({receipt})=>{
  return(
    <>
    {
      receipt.length ? receipt.map(receipt=>{
        return(
          <div class="card hover-shadow-lg align-content-center">
              
              <div class="card-body pt-0">
                <div class="p-3 border border-dashed">
                  
              <div class="row align-items-center">
                <div class="media mt-4 align-items-center col">
                  <div class="media-body pl-3">
                    <div class="text-lg my-0">{receipt.surname} {receipt.name}</div>
                  </div>
                </div>
                
                  <div class="col text-muted font-weight-600 text-center">School Fee: #{receipt.fees}</div>
                </div>
                  <div class="row align-items-center mt-3">
                    <div class="col-6 text-center">
                      <h6 class="mb-0">#{receipt.paidAmount}</h6>
                      <span class="text-sm text-muted">Amount Paid</span>
                    </div>
                    <div class="col-6 text-center">
                      <h6 class="mb-0">{receipt.day}-{receipt.month}-{receipt.year}</h6>
                      <span class="text-sm text-muted">Date</span>
                    </div>
                  </div>
                  <div class="row align-items-center mt-3">
                    <div class="col-6 text-center">
                      <h6 class="mb-0">#{receipt.amountPaid}</h6>
                      <span class="text-sm text-muted">Total Amount Paid</span>
                    </div>
                    <div class="col-6 text-center">
                      <h6 class="mb-0">#{receipt.fees - receipt.amountPaid}</h6>
                      <span class="text-sm text-muted">Amount Left</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
        )
      })
      : null
    }
    </>
    
  )
}
export const ListManagement=({receipt})=>{
  return(
    <div class="table-responsive" >
            <table class="table align-items-center" id='myTable'>
              <thead>
                <tr>
                <th scope="col">
                    Full Name 
                    </th>
                    <th scope="col">
                    Class 
                    </th>
                    <th scope="col">
                    Class Fee 
                    </th>
                    <th scope="col">
                    Amount Paid 
                    </th>
                    <th scope="col">
                    Amount Left 
                    </th>
                    <th scope="col">
                    Total Amount Paid 
                    </th>
                    <th scope="col">
                    Date 
                    </th>
                </tr>
              </thead>
    <tbody class='list'>
    {
      receipt.length ? receipt.map(receipt=>{
        return(
          <tr>
                <th scope="row">
                  <div class="media align-items-center">
                    <div>
                    </div>
                    <div class="media-body ml-4">
                      <a href="#" class="name h6 mb-0 text-sm">{receipt.surname} {receipt.name}</a>
                      <small class="d-block font-weight-bold">{receipt.feeStatus}</small>
                    </div>
                  </div>
                </th>
                <td >
                  {receipt.clas}
                </td>
                <td scope='col' class='budget'>
                  {receipt.fees}
                </td>
                <td scope='col'>
                  {receipt.paidAmount}
                </td>
                <td scope='col'>{receipt.fees-receipt.amountPaid}</td>
                <td scope='col'>
                  {receipt.amountPaid}
                  </td>
                <td scope='col'>{receipt.day}/{receipt.month}/{receipt.year}</td>
              </tr>
        )
      })
      : null
    }
              
              
            </tbody>
          </table>
          </div>

  )
}
export const TableManagement=({data})=>{
  return(
    <div class="table-responsive" >
            <table class="table align-items-center" id='myTable'>
              <thead>
                <tr>
                <th scope="col">
                    Class
                    </th>
                    <th scope="col">
                    Amount Paid 
                    </th>
                    <th scope="col">
                    Amount Left 
                    </th>
                </tr>
              </thead>
    <tbody class='list'>
    {
      data.length ? data.map(data=>{
        return(
          <tr>
                <th scope="row">
                  {data.clas}
                </th>
                <td >
                  {data.paid}
                </td>
                <td scope='col' class='budget'>
                  {data.debtor}
                </td>
              </tr>
        )
      })
      : null
    }
              
              
            </tbody>
          </table>
          </div>
  )
}