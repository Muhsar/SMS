import { Nigeria } from '../../nigeria-state-and-lgas';
import React from 'react';
import jwt_decode from 'jwt-decode'
import { RegClasses } from '../../classes';
const decode = localStorage.token ? jwt_decode(localStorage.token) : null

export const OwnerRegistration=({submit,
    logoUpload,
    uploadLogo,
    imageUpload,
    uploadImage,
    handleChange,
    handlePassword,
    state,
    kR
})=>{
    return(
        <form onSubmit={submit}>
        <div className='row'>
        <div className='col border-right border-bottom mb-2'>

        {
        (state.logo==='no logo')?(
          <div className='form-group'>
          <img
           id="image"
            alt=''
             src={kR}
              style={{width:'100px',height:'100px'}}
               className='mx-auto d-block rounded-circle img-fluid'
                onClick={logoUpload}/>
          <p className='text-center'>Click to Add School Logo</p>
          <input onChange={uploadLogo} type="file" id="newLogo" name='image' style={{display: "none"}}/>
          </div>
        ):(
          <div className='form-group'>
          <img
            id="image"
            alt=''
            src={state.logo} 
            style={{width:'100px',height:'100px'}} 
            className='mx-auto d-block rounded-circle img-fluid' 
            onClick={logoUpload}/>
          <input required onChange={uploadLogo} type="file" id="newLogo" name='image' style={{display: "none"}}/>
          </div>
        )
      }
      {
        state.noLogo===false ?
        null :
        <p className="alert alert-danger">Please Add Logo To Continue</p>
      }
        <div class="form-group">
        <label for="schoolName">School Name</label>
        <input class="form-control"
         id="schoolName"
          type="text"
           name="schoolName"
            placeholder="Enter Name"
            value={state.schoolName}
            required onChange={handleChange}/>
      </div>
        <div class="form-group">
        <label for="schoolEmail">School's Email</label>
        <input class="form-control"
         id="schoolEmail"
          type="email"
           name="schoolEmail"
            placeholder="Enter Email"
            required onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="address">School's Address</label>
        <input class="form-control"
         id="address"
          type="text"
           name="address"
            placeholder="School's Address"
            required onChange={handleChange}/>
      </div>
      <div className='form-group'>
        <label>School System</label>
        <select className='form-control' required onChange={handleChange} name='clas'>
          <option>Select Class System</option>
          <option>Both</option>
          <option>Primary</option>
          <option>Secondary</option>
        </select>
      </div>
      <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="state" class=" form-control-label">State Of Origin</label>
                                               </div>
                                                 <div class="col-12 col-md-9">
                                                 <input list="states" required onChange={handleChange} placeholder='Please select State Of Origin' className='form-control-emphasized form-control' name="state" id="state"/>
                                                 <datalist id="states">
                                                   {
                                                     Nigeria.map(nigeria=>{
                                                       return(
                                                           <option value={nigeria.state}>{nigeria.state}</option>
                                                       )
                                                      })
                                                    }
                                                 </datalist>
                                                   
                                                 </div>
                                                 </div>
{
                                          state.state!=='' ? 
                                                 <div class="row form-group">
                                                 <div class="col col-md-3">
                                                   <label for="lga" class=" form-control-label">Local Government Area</label>
                                               </div>
                                                 <div class="col-12 col-md-9">
                                                   <input list="lgas" required onChange={handleChange} placeholder='Please select LGA' className='form-control-emphasized form-control' name="lga" id="lga"/>
                                                 <datalist id="lgas">
{
                                                     Nigeria.map(nigeria=>{
                                                       return(
                                                         <>
                                                           {
                                                             state.state===nigeria.state ?
                                                             nigeria.lgas.map(lga=>{
                                                               return(
                                                                 <option value={lga}>{lga}</option>
                                                               )
                                                             })
                                                             :
                                                             null
                                                           }
                                                           </>
                                                       )
                                                      })
                                                    }
                                                 </datalist>
                                                   
                                                 </div>
                                           </div>
                                           :
                                           null
}
          </div>
          <div className='col border-left border-bottom mb-2'>
          {
        (state.image==='no image')?(
          <div className='form-group'>
          <img 
          id="image" 
          alt='' 
          src={kR} 
          style={{width:'100px',height:'100px'}} 
          className='mx-auto d-block rounded-circle img-fluid' 
          onClick={imageUpload}/>
          <p className='text-center'>Click to Add Profile Image</p>
          <input onChange={uploadImage} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        ):(
          <div className='form-group'>
          <img id="image" alt='' src={state.image} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={imageUpload}/>
          <input required onChange={uploadImage} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        )
      }
        <div class="form-group">
        <label for="firstName">First Name</label>
        <input class="form-control"
         id="firstName"
          type="text"
           name="firstName"
            placeholder="First Name"
            value={state.firstName}
            required onChange={handleChange}/>
      </div>
        <div class="form-group">
        <label for="lastName">Last Name</label>
        <input class="form-control"
         id="lastName"
          type="text"
           name="lastName"
            placeholder="Last Name"
            value={state.lastName}
            required onChange={handleChange}/>
      </div>
        <div class="form-group">
        <label for="ownerEmail">Owner's Email</label>
        <input class="form-control"
         id="ownerEmail"
          type="email"
           name="ownerEmail"
            placeholder="Enter Email"
            required onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="number">Mobile Number</label>
        <div className='input-group'>
        <div className='input-group-prepend'>
        <span className='input-group-text'>
        <i className='fa fa-phone'/>(+234)
        </span>
        </div>
        <input class="form-control"
         id="number"
          type="number"
           name="number"
            placeholder="Mobile Number"
            required onChange={handleChange}/>
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
         id="password"
          type="password"
           name="password"
            placeholder="Create Password"
            required onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="confirmPassword">confirm Password</label>
        <input class="form-control"
         id="confirmPassword"
          type="password"
           name="confirmPassword"
            placeholder="Confirm Password"
            required onChange={handlePassword}/>
      </div>
      
          </div>
        </div>
        
          <button class="btn btn-primary btn-block" type="submit" value="Register">Register →</button>
        </form>
    )
}
export const TeacherRegistration=({handleSubmit,handleClass,state,handleChange,handleTeacherId})=>{
    return(
        <form onSubmit={handleSubmit}>
        
        <div class="form-group">
            <label for="email">Your ID</label>
            <input class="form-control"
            id="teacher_id"
            type="text"
            name="teacher_id"
            placeholder="Enter Teacher's ID"
            required onChange={handleTeacherId}/>
            </div>
        {
          (state.reg===true)?(
            <div>
            {
              (state.msg==='')?(<div></div>):(
                <div className='alert alert-danger'>{state.msg}</div>
              )
            }
            <div
         class="row form-group">
            <div class="col col-md-3">
                <label for="selectSm" class=" form-control-label">Class</label>
            </div>
            <div class="col-12 col-md-9">
                <RegClasses clas={handleClass}/>
            </div>
        </div>
        {
          state.nextStage===false ? null :
          <>
            <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control"
            id="password"
            type="password"
            name="password"
            placeholder="Create Password"
            required onChange={handleChange}/>
            </div>
            <button class="btn btn-primary btn-block" type="submit" value="Register">Register →</button>
          </>
          }
            </div>
          ):(
            <div></div>
          )
        }
        </form>
    )
}
export const ParentRegistration=({handleSubmit,state,handleId,checkId,handleChange})=>{
    return(
        <form onSubmit={handleSubmit}>
        <div
         class="row form-group">
        {
          state.status===''?<div></div>:<div className='alert alert-info'>{state.status}</div>
        }
            <div class="col col-md-3">
                <label for="selectSm" class=" form-control-label">Child's Id</label>
            </div>
            <div class=" col col-md-7">
                <input value={state.student_id} name="student_id" required onChange={handleId} type='text' className='form-control'/>
            </div>
            <div class='col col-md-2'><button type="button" className='btn btn-outline-primary btn-block' onClick={checkId}>Next</button></div>
        </div>
        {
          (state.reg===true)?(
            <div>
            {
              (state.msg==='')?(<div></div>):(
                <div className='alert alert-danger'>{state.msg}</div>
              )
            }
            <div class="form-group">
            <label for="surname">Child's Surname</label>
            <input class="form-control"
            id="surname"
            type="surname"
            name="surname"
            placeholder="Enter Child's Surname"
            required onChange={handleChange}/>
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control"
            id="password"
            type="password"
            name="password"
            placeholder="Create Password"
            required onChange={handleChange}/>
            </div>
            <button class="btn btn-primary btn-block" type="submit" value="Register">Register →</button>
            </div>
          ):(
            (state.student_id==='')?(
              <div className='alert alert-info'>Input The Child's ID to continue with the registration</div>
            ):(state.error!==''?
            <div className='alert alert-info'>{state.error}</div>:<div></div>)
          )
        }
        </form>
    )
}