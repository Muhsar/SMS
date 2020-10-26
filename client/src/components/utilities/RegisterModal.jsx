import React from 'react';
import jwt_decode from 'jwt-decode'
import { Nigeria } from '../../nigeria-state-and-lgas';
import { AllClasses } from '../../classes';
const decode = localStorage.token ? jwt_decode(localStorage.token) : null
export const StudentRegistration =({submit,clas,change,department,state,msg,upload,image,kR})=>{
    return(
        <div class="modal fade" id="registerStudent" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-body">
              {
                    (msg)?(
                      <div class='alert alert-success'>{msg}</div>
                    ):(
                      <div></div>
                    )

                  }
              <form onSubmit={submit} class="form-horizontal">
                                   <div class="card-body card-block">
                                   {
        (state.image==='no image')?(
          <div className='form-group'>
          <img id="image" alt='' src={kR} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={image}/>
          <p className='text-center'>Click to Add Student's Image</p>
          <input onChange={upload} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        ):(
          <div className='form-group'>
          <img id="image" alt='' src={state.image} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={image}/>
          <input onChange={upload} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        )
      }
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Name</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} type="text" id="text-input" name="name" placeholder="Enter Child's Name" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Surname</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} type="text" id="text-input" name="surname" placeholder="Enter Child's Surname" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Date Of Birth</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} type="date" id="text-input" name="date" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>


                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="selectSm" class=" form-control-label">Class</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                               <AllClasses clas={clas}/>
                                               </div>
                                           </div>
                                           {
                                             (state.clas==='Sss1'||state.clas==='Sss2'||state.clas==='Sss3')?(
                                               <div class="row form-group">
                                                   <div class="col col-md-3">
                                                       <label for="selectSm" class=" form-control-label">Department</label>
                                                   </div>
                                                   <div class="col-12 col-md-9">
                                                     <input list='departments' required onChange={department} name="department" placeholder='Select Department' class=" form-control-emphasized form-control"/>
                                                       <datalist id='departments'>
                                                       <option>Science</option>
                                                           <option>Commercial</option>
                                                           <option>Art</option>
                                                       </datalist>
                                                       
                                                   </div>
                                               </div>
                                             ):(
                                               <div></div>
                                             )
                                           }

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label class=" form-control-label">Gender</label>
                                               </div>
                                               <div class="col col-md-9">
                                                   <div class="form-check">
                                                       <div class="radio">
                                                           <label for="radio1" class="form-check-label ">
                                                               <input required onChange={change} type="radio" id="radio1" name="gender" value="Male" class="form-check-input"/> Male
                                                           </label>
                                                       </div>
                                                       <div class="radio">
                                                           <label for="radio2" class="form-check-label ">
                                                               <input required onChange={change} type="radio" id="radio2" name="gender" value="Female" class="form-check-input"/> Female
                                                           </label>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label class=" form-control-label">Religion</label>
                                               </div>
                                               <div class="col col-md-9">
                                                   <div class="form-check">
                                                       <div class="radio">
                                                           <label for="radio1" class="form-check-label ">
                                                               <input required onChange={change} type="radio" id="radio1" name="religion" value="Islam" class="form-check-input"/> Islam
                                                           </label>
                                                       </div>
                                                       <div class="radio">
                                                           <label for="radio2" class="form-check-label ">
                                                               <input required onChange={change} type="radio" id="radio2" name="religion" value="Christianity" class="form-check-input"/> Christianity
                                                           </label>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="state" class=" form-control-label">State Of Origin</label>
                                               </div>
                                                 <div class="col-12 col-md-9">
                                                 <input list="states" onChange={change} placeholder='Please select State Of Origin' className='form-control-emphasized form-control' name="state" id="state"/>
                                                 <datalist id="states">
                                                 <option>Please Select State</option>
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
                                                   <input list="lgas" onChange={change} placeholder='Please select LGA' className='form-control-emphasized form-control' name="lga" id="lga"/>
                                                 <datalist id="lgas">
                                                 <option>Please Select LGA</option>
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
                                           
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} placeholder='Enter Home Address' type="text" id="text-input" name="address" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">School Fee Paid (#)</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} placeholder='Amount Paid During Registration' type="number" id="text-input" name="amountPaid" class="form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Name</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} placeholder="Enter Guardian's Name" type="text" id="text-input" name="pname" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Surname</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} placeholder="Enter Guardian's Surname" type="text" id="text-input" name="psurname" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Email Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} placeholder="Enter Guardian's Email" type="text" id="text-input" name="email" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Mobile Number</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} placeholder="Enter Mobile Number" type="number" id="text-input" name="number" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} placeholder="Enter Guardian's Address" type="text" id="text-input" name="paddress" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>

                                           </div>
                                   <div class="card-footer">
                                       <button type="submit" class="btn btn-primary btn-sm btn-block">
                                           <i class="fa fa-dot-circle-o"></i> Submit
                                       </button>
                                       {
                                         (msg)?(
                                           <div class='alert alert-success'>{msg}</div>
                                         ):(
                                           <div></div>
                                         )

                                       }
                                   </div>
                                   </form>
              </div>
              
            </div>
          </div>
        </div>
    )
}
export const TeacherRegistration =({submit,error,change,state,msg,upload,image,kR})=>{
  return(
      <div class="modal fade" id="registerTeacher" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-body">
            {
                    (msg)?(
                      <div class='alert alert-success'>{msg}</div>
                    ):(
                      <div></div>
                    )

                  }
                  {
                    (error)?(
                      <div class='alert alert-danger'>{error}</div>
                    ):(
                      <div></div>
                    )

                  }
            <form onSubmit={submit} class="form-horizontal">
                                 <div class="card-body card-block">
                                 {
      (state.image==='no image')?(
        <div className='form-group'>
        <img id="image" alt='' src={kR} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={image}/>
        <p className='text-center'>Click to Add Teacher's Image</p>
        <input onChange={upload} type="file" id="newImage" name='image' style={{display: "none"}}/>
        </div>
      ):(
        <div className='form-group'>
        <img id="image" alt='' src={state.image} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={image}/>
        <input onChange={upload} type="file" id="newImage" name='image' style={{display: "none"}}/>
        </div>
      )
    }
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Name</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required onChange={change} type="text" id="text-input" name="name" placeholder="Enter Teacher's Name" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Surname</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required onChange={change} type="text" id="text-input" name="surname" placeholder="Enter Teacher's Surname" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="selectSm" class=" form-control-label">Class</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                             <AllClasses clas={change}/>
                                             </div>
                                         </div>
                                         
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label class=" form-control-label">Gender</label>
                                             </div>
                                             <div class="col col-md-9">
                                                 <div class="form-check">
                                                     <div class="radio">
                                                         <label for="radio1" class="form-check-label ">
                                                             <input required onChange={change} type="radio" id="radio1" name="gender" value="Male" class="form-check-input"/> Male
                                                         </label>
                                                     </div>
                                                     <div class="radio">
                                                         <label for="radio2" class="form-check-label ">
                                                             <input required onChange={change} type="radio" id="radio2" name="gender" value="Female" class="form-check-input"/> Female
                                                         </label>
                                                     </div>

                                                 </div>
                                             </div>
                                         </div>
                                              
                                         
                                         
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Address</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required onChange={change} placeholder='Enter Home Address' type="text" id="text-input" name="address" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Email Address</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required onChange={change} placeholder="Enter Email" type="text" id="text-input" name="email" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Mobile Number</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required onChange={change} placeholder="Enter Mobile Number" type="number" id="text-input" name="number" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         </div>
                                 <div class="card-footer">
                                     <button type="submit" class="btn btn-primary btn-sm btn-block">
                                         <i class="far fa-user-plus"></i> Submit
                                     </button>
                                     {
                    (msg)?(
                      <div class='alert alert-success'>{msg}</div>
                    ):(
                      <div></div>
                    )

                  }
                  {
                    (error)?(
                      <div class='alert alert-danger'>{error}</div>
                    ):(
                      <div></div>
                    )

                  }
                                 </div>
                                 </form>
            </div>
            
          </div>
        </div>
      </div>
  )
}
export const NewBill =({change,add,state,remove,submit})=>{
  return(
      <div class="modal fade" id="addBill" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            {
              state.msg ? 
              <div className="alert alert-success">{state.msg}</div>
              : null
            }
            <div className="modal-header text-center">Add New Bill</div>
            <div class="modal-body">
              <form onSubmit={submit}>
              <div className="row form-group">
                  <div className="col-md3"><label htmlFor="uniform">Class</label></div>
                  <div className="col md-9">
                    <AllClasses clas={change} value={state.clas}/>
                    </div>
                </div>
                <div className="row form-group">
                  <div className="col-md3"><label htmlFor="uniform">School Fee</label></div>
                  <div className="col md-9">
                    <input type="number" required onChange={change} name='fees' value={state.fees} className="form-control form-control-emphasized"/>
                    </div>
                </div>
                <div className="row form-group">
                  <div className="col-md3"><label htmlFor="uniform">Uniform Fee</label></div>
                  <div className="col md-9">
                    <input type="number" required onChange={change} value={state.uniform} name='uniform' className="form-control form-control-emphasized"/>
                    </div>
                </div>
                <div className="row form-group">
                  <div className="col-md3"><label htmlFor="uniform">Note Books</label></div>
                  <div className="col md-9">
                    <div className="row">
                      <div className="col-3 text-center">No. Needed</div>
                      <div className="col-7 text-center">Price Per Note Book</div>
                      <div className="col-2 text-center">Total</div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <input type="number" required onChange={change} value={state.exerciseBooks} name='exerciseBooks' className="form-control form-control-emphasized"/>
                      </div>
                      <div className="col-7">
                        <input type="number" required value={state.pricePerBook} onChange={change} name='pricePerBook' className="form-control form-control-emphasized"/>
                      </div>
                      <div className="col-2 text-center">#{state.exerciseBooks*state.pricePerBook}</div>
                    </div>
                    
                    </div>
                </div>
                <table class="table align-items-center">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      state.textBooks.map(textbook=>{
                        return(
                          <tr key={textbook.id}>
                          <td>{textbook.name}</td>
                          <td>#{textbook.price}</td>
                          <td>
                          <button type='button' onClick={()=>remove(textbook.id)} class="action-item text-danger mr-2">
                        <i class="far fa-trash"></i>
                      </button>
                          </td>
                        </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
                
                <div className="row form-group">
                  <div className="col-md3"><label htmlFor="">TextBooks</label></div>
                  <div className="col md-9">
                    <div className="row">
                      <div className="col-3 text-center">Name</div>
                      <div className="col-7 text-center">(#)Price</div>
                    </div>
                    <div className="row">
                      <div className="col-5">
                        <input type="text" onChange={change} value={state.name} name='name' className="form-control form-control-emphasized"/>
                      </div>
                      <div className="col-4">
                        <input type="number" onChange={change} value={state.price} name='price' className="form-control form-control-emphasized"/>
                      </div>
                      <div className="col-3 text-left"><button onClick={add} className="btn-soft-primary btn btn-block btn-animated">Add</button></div>
                    </div>
                    
                    </div>
                  
                </div>
                <input type="submit" value="Add Bill" className='btn btn-block btn-soft-primary'/>
              </form>
              {
              state.msg ? 
              <div className="alert alert-success">{state.msg}</div>
              : null
            }
            </div>
            
          </div>
        </div>
      </div>
  )
}
export const UploadNews=({submit, state, upload, kR, image, change})=>{
  return(
    <div class="modal fade" id="addNews" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div className="modal-header text-center">Make a new Post/Upload</div>
            <div class="modal-body">
            <form onSubmit={submit} class="form-horizontal">
                                   <div class="card-body card-block">
                                   {
        (state.image==='no image')?(
          <div className='form-group'>
          <img id="image" alt='' src={kR} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={image}/>
          <p className='text-center'>Click to Add News Image</p>
          <input onChange={upload} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        ):(
          <div className='form-group'>
          {/* <img id="image" alt='' src={state.image} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={image}/> */}
          <div class="card overflow-hidden" data-animate-hover="2">
    <div class="overflow-hidden">
        <div class="animate-this text-white">
                <img id='image' alt='' src={state.image} className='mx-auto d-block img-fluid card-img-top' onClick={image}/>
        </div>
    </div>
</div>
          <input onChange={upload} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        )
      }
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Title</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input required onChange={change} type="text" id="text-input" name="title" placeholder="Enter News Title" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Content</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   {/* <input required onChange={change} type="text" id="text-input" name="surname" placeholder="Enter Child's Surname" class=" form-control-emphasized form-control"/> */}
                                               <textarea
                                                name="content"
                                                id=""
                                                 cols="30" 
                                                 rows="10" 
                                                 className="form-control form-control-emphasized"
                                                 placeholder='News Content goes here'
                                                 ></textarea>
                                               </div>
                                           </div>

                                           </div>
                                   <div class="card-footer">
                                       <button type="submit" class="btn btn-primary btn-sm btn-block">
                                           <i class="fa fa-dot-circle-o"></i> Submit
                                       </button>
                                       
                                   </div>
                                   </form>
            </div>
          </div>
        </div>
      </div>
  )
}