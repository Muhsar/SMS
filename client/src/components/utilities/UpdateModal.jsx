import React from 'react';
import jwt_decode from 'jwt-decode'
import { AllClasses } from '../../classes';
import { Nigeria } from '../../nigeria-state-and-lgas';
import { StudentReceipt, StudentDebt, StudentResult } from './Cards';
const decode = localStorage.token ? jwt_decode(localStorage.token) : null

export const UpdateBill=({submit,change,state,classBill,remove,add})=>{
    return(
        <div class="modal fade" id="updateBill" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div className="modal-header text-center">Update {classBill.clas} Bill</div>
            <div class="modal-body">
            <form onSubmit={submit}>
              <div className="row form-group">
                  <div className="col-md3"><label htmlFor="uniform">Class</label></div>
                  <div className="col md-9">
                    <AllClasses value={state.clas} clas={change}/>
                    </div>
                </div>
                <div className="row form-group">
                  <div className="col-md3"><label htmlFor="uniform">School Fee</label></div>
                  <div className="col md-9">
                    <input type="number" value={state.fees} onChange={change} name='fees' className="form-control form-control-emphasized"/>
                    </div>
                </div>
                <div className="row form-group">
                  <div className="col-md3"><label htmlFor="uniform">Uniform Fee</label></div>
                  <div className="col md-9">
                    <input type="number" value={state.uniform} onChange={change} name='uniform' className="form-control form-control-emphasized"/>
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
                        <input type="number" value={state.exerciseBooks} onChange={change} name='exerciseBooks' className="form-control form-control-emphasized"/>
                      </div>
                      <div className="col-7">
                        <input type="number" value={state.pricePerBook} onChange={change} name='pricePerBook' className="form-control form-control-emphasized"/>
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
                        <input type="text"  onChange={change} value={state.name} name='name' className="form-control form-control-emphasized"/>
                      </div>
                      <div className="col-4">
                        <input type="number"  onChange={change} value={state.price} name='price' className="form-control form-control-emphasized"/>
                      </div>
                      <div className="col-3 text-left"><button onClick={add} className="btn-soft-primary btn btn-block btn-animated">Add</button></div>
                    </div>
                    
                    </div>
                  
                </div>
                <input type="submit" value="Update Bill" className='btn btn-block btn-soft-primary'/>
              </form>
            
            </div>
        </div>
        </div>
        </div>
    )
}
export const UpdateNews=({submit, state, upload, image, change})=>{
  return(
    <div class="modal fade" id="updateNews" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div className="modal-header text-center">Upload Post</div>
            <div class="modal-body">
            <form onSubmit={submit} class="form-horizontal">
                                   <div class="card-body card-block">
                                   
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
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Title</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.title} required onChange={change} type="text" id="text-input" name="title" placeholder="Enter News Title" class=" form-control-emphasized form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Content</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   {/* <input required onChange={change} type="text" id="text-input" name="surname" placeholder="Enter Child's Surname" class=" form-control-emphasized form-control"/> */}
                                               <textarea
                                               
                                               onChange={change}
                                               value={state.content}
                                                name="content"
                                                id=""
                                                 cols="30" 
                                                 rows="10" 
                                                 className="form-control form-control-emphasized"
                                                 placeholder='News Content goes here'
                                                 >{state.content}</textarea>
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
export const UpdateStudent =({submit,clas,change,department,state,msg,upload,image})=>{
  return(
      <div class="modal fade" id="updateStudent" tabindex="-1" role="dialog" aria-hidden="true">
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
                                 <div className='form-group'>
                {
                  state.image==='no image' ? 
                  <div className="ml-5">
                    <div className="ml-5">
                    <div className="ml-5">
                    <div className="ml-5">
                    <div className="ml-5">
                      <h1 className="avatar ml-5 avatar-xl bg-primary rounded-circle" onClick={image}>
                      {state.surname.slice(0,1)}{state.name.slice(0,1)}
                      </h1>
                  </div>
                    </div>
                    </div>
                    </div>
                    </div>
                  :
                <img id='image' alt='' src={state.image} className='mx-auto d-block img-fluid card-img-top shadow hover-shadow-lg' onClick={image}/>
                }
          <input onChange={upload} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Name</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required value={state.name} onChange={change} type="text" id="text-input" name="name" placeholder="Enter Child's Name" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Surname</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required value={state.surname} onChange={change} type="text" id="text-input" name="surname" placeholder="Enter Child's Surname" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                        

                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="selectSm" class=" form-control-label">Class</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                             <AllClasses value={state.clas} clas={clas}/>
                                             </div>
                                         </div>
                                         {
                                           (state.clas==='Sss1'||state.clas==='Sss2'||state.clas==='Sss3')?(
                                             <div class="row form-group">
                                                 <div class="col col-md-3">
                                                     <label for="selectSm" class=" form-control-label">Department</label>
                                                 </div>
                                                 <div class="col-12 col-md-9">
                                                   <input list='departments' required value={state.department} onChange={department} name="department" placeholder='Select Department' class=" form-control-emphasized form-control"/>
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
                                                 <label for="state" class=" form-control-label">State Of Origin</label>
                                             </div>
                                               <div class="col-12 col-md-9">
                                               <input list="states" value={state.state} onChange={change} placeholder='Please select State Of Origin' className='form-control-emphasized form-control' name="state" id="state"/>
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
                                                 <input list="lgas" value={state.lga} onChange={change} placeholder='Please select LGA' className='form-control-emphasized form-control' name="lga" id="lga"/>
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
                                                 <input required value={state.address} onChange={change} placeholder='Enter Home Address' type="text" id="text-input" name="address" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         {
                                             (state.classChange===false)?(<div></div>):(
                                               <div>
                                               <div className='alert alert-info'>{state.name}'s class has Changed <br/>
                                                Please Input the amount paid before or after resuming into {state.clas}
                                               </div>
                                               <div class="row form-group">
                                                   <div class="col col-md-3">
                                                       <label for="text-input" class=" form-control-label">School Fee Paid (#)</label>
                                                   </div>
                                                   <div class="col-12 col-md-9">
                                                       <input onChange={change} placeholder='Amount Paid During Registration' type="number" id="text-input" name="amountPaid" class="form-control form-control-emphasized"/>
                                                   </div>
                                               </div>
                                               </div>
                                             )
                                           }
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Guardian's Name</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required value={state.pname} onChange={change} placeholder="Enter Guardian's Name" type="text" id="text-input" name="pname" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Guardian's Surname</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required value={state.psurname} onChange={change} placeholder="Enter Guardian's Surname" type="text" id="text-input" name="psurname" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Guardian's Email Address</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required value={state.email} onChange={change} placeholder="Enter Guardian's Email" type="text" id="text-input" name="email" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Mobile Number</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required value={state.number} onChange={change} placeholder="Enter Mobile Number" type="number" id="text-input" name="number" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>
                                         <div class="row form-group">
                                             <div class="col col-md-3">
                                                 <label for="text-input" class=" form-control-label">Guardian's Address</label>
                                             </div>
                                             <div class="col-12 col-md-9">
                                                 <input required value={state.paddress} onChange={change} placeholder="Enter Guardian's Address" type="text" id="text-input" name="paddress" class=" form-control-emphasized form-control"/>
                                             </div>
                                         </div>

                                         </div>
                                 <div class="card-footer">
                                     <button type="submit" class="btn btn-primary btn-sm btn-block">
                                         <i class="far fa-user-cog"></i> Update
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
export const DebtorModal=({debtor,receipt,student,state,handleChange,handleSubmit})=>{
  return(
    <div class="modal fade" id="debtorModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-body">
            <nav class="nav nav-pills nav-pills-icon nav-justified">
    <a class="nav-item nav-link py-3 active" data-toggle='tab' href="#debtor">
        <span class="d-block">
            <i class="far fa-money-bill-wave fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">Debt Status</span>
    </a>
    <a class="nav-item nav-link py-3" data-toggle='tab' href="#receipt">
        <span class="d-block">
            <i class="far fa-receipt fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">Receipts</span>
    </a>
    
</nav>
    <div class="tab-content">
  <div class="tab-pane container active" id="debtor"><StudentDebt debtor={debtor} 
  student={student}
  handleChange={handleChange}
                handleSubmit={handleSubmit}
                state={state}
  /></div>
  <div class="tab-pane container fade" id="receipt"><StudentReceipt receipt={receipt} student={student}/></div>
</div>
            </div>
            </div>
            </div>
            </div>
  )
}
export const ResultModal=({student,
  result,
  openSecond,
  openThird,
  testtotal,
  examtotal,
  totalresult,
  percentage})=>{
  return(
    <div class="modal fade" id="resultModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-body">
            <nav class="nav nav-pills nav-pills-icon nav-justified">
    <a class="nav-item nav-link py-3 active" data-toggle='tab' href="#first">
        
        <span class="d-none d-sm-block mt-2">First Term</span>
    </a>
    <a onClick={()=>openSecond(student.student_id)} class="nav-item nav-link py-3" data-toggle='tab' href="#second">
        
        <span class="d-none d-sm-block mt-2">Second Term</span>
    </a>
    <a onClick={()=>openThird(student.student_id)} class="nav-item nav-link py-3" data-toggle='tab' href="#third">
        
        <span class="d-none d-sm-block mt-2">Third Term</span>
    </a>
    
</nav>
    <div class="tab-content">
  <div class="tab-pane container active" id="first">
    <StudentResult
    student={student}
    result={result}
    testtotal={testtotal}
    examtotal={examtotal}
    totalresult={totalresult}
    percentage={percentage}
    term={'1st Term'}
    />
  </div>
  <div class="tab-pane container fade" id="second">
  <StudentResult
    student={student}
    result={result}
    testtotal={testtotal}
    examtotal={examtotal}
    totalresult={totalresult}
    percentage={percentage}
    term={'2nd Term'}
    />
  </div>
  <div class="tab-pane container fade" id="third">
  <StudentResult
    student={student}
    result={result}
    testtotal={testtotal}
    examtotal={examtotal}
    totalresult={totalresult}
    percentage={percentage}
    term={'3rd Term'}
    />
  </div>
</div>
            </div>
            </div>
            </div>
            </div>
  )
}
export const TeacherUpdate =({submit,change,state,msg,upload,image,error})=>{
  return(
    <div class="modal fade" id="updateTeacher" tabindex="-1" role="dialog" aria-hidden="true">
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
                             <div className='form-group'>
                {
                  state.image==='no image' ? 
                  <div className="ml-5">
                    <div className="ml-5">
                    <div className="ml-5">
                    <div className="ml-5">
                    <div className="ml-5">
                      <h1 className="avatar ml-5 avatar-xl bg-primary rounded-circle" onClick={image}>
                      {state.surname.slice(0,1)}{state.name.slice(0,1)}
                      </h1>
                  </div>
                    </div>
                    </div>
                    </div>
                    </div>
                  :
                <img id='image' alt='' src={state.image} className='mx-auto d-block img-fluid card-img-top shadow hover-shadow-lg' onClick={image}/>
                }
          <input onChange={upload} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
                                     <div class="row form-group">
                                         <div class="col col-md-3">
                                             <label for="text-input" class=" form-control-label">Name</label>
                                         </div>
                                         <div class="col-12 col-md-9">
                                             <input required value={state.name} onChange={change} type="text" id="text-input" name="name" placeholder="Enter Teacher's Name" class=" form-control-emphasized form-control"/>
                                         </div>
                                     </div>
                                     <div class="row form-group">
                                         <div class="col col-md-3">
                                             <label for="text-input" class=" form-control-label">Surname</label>
                                         </div>
                                         <div class="col-12 col-md-9">
                                             <input required value={state.surname} onChange={change} type="text" id="text-input" name="surname" placeholder="Enter Teacher's Surname" class=" form-control-emphasized form-control"/>
                                         </div>
                                     </div>
                                     
                                     <div class="row form-group">
                                         <div class="col col-md-3">
                                             <label for="selectSm" class=" form-control-label">Class</label>
                                         </div>
                                         <div class="col-12 col-md-9">
                                         <AllClasses value={state.clas} clas={change}/>
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
                                             <input required onChange={change} value={state.address} placeholder='Enter Home Address' type="text" id="text-input" name="address" class=" form-control-emphasized form-control"/>
                                         </div>
                                     </div>
                                     
                                     <div class="row form-group">
                                         <div class="col col-md-3">
                                             <label for="text-input" class=" form-control-label">Email Address</label>
                                         </div>
                                         <div class="col-12 col-md-9">
                                             <input required onChange={change} value={state.email} placeholder="Enter Email" type="text" id="text-input" name="email" class=" form-control-emphasized form-control"/>
                                         </div>
                                     </div>
                                     <div class="row form-group">
                                         <div class="col col-md-3">
                                             <label for="text-input" class=" form-control-label">Mobile Number</label>
                                         </div>
                                         <div class="col-12 col-md-9">
                                             <input required value={state.number} onChange={change} placeholder="Enter Mobile Number" type="number" id="text-input" name="number" class=" form-control-emphasized form-control"/>
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
export const PasswordUpdate=({state,msg,error,updatePassword,deleteAccount,change,setNull})=>{
  return(
    <>
    <form onSubmit={updatePassword}>
                    {
                      msg ?
                      <div className="alert alert-success alert-dismissible">
                        <button className="btn btn-action-label" data-dismiss='alert'>
                          &times;
                          </button>
                          {msg}
                          </div>
                          : null
                    }
                    {
                      error ?
                      <div className="alert alert-danger alert-dismissible">
                        <button className="btn btn-action-label" data-dismiss='alert'>
                          &times;
                          </button>
                          {error}
                          </div>
                          : null
                    }
                          <div class="row">
                    <div class="col-md-6 mx-auto">
                      <div class="form-group">
                        <label class="form-control-label">Old password</label>
                        <input required onChange={change} value={state.oldPassword} name='oldPassword' class="form-control form-control-emphasized" type="password"/>
                        {
                          state.passwordUpdateError === "Password Incorrect" ?
                          <div className="alert alert-danger alert-dismissible">
                            <button className="btn btn-action-label" onClick={setNull}>
                              &times;
                              </button>
                              {state.passwordUpdateError}
                              </div>
                              :
                              null
                        }
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-control-label">New password</label>
                        <input required onChange={change} value={state.newPassword} name='newPassword' class="form-control form-control-emphasized" type="password"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-control-label">Confirm password</label>
                        <input required onChange={change} value={state.confirmPassword} name='confirmPassword' class="form-control form-control-emphasized" type="password"/>
                      </div>
                    </div>
                    {
                          state.passwordUpdateError === "Passwords do not Match" ?
                          <div className="alert alert-danger alert-dismissible col-md-12">
                            <button className="btn btn-action-label" onClick={setNull}>
                              &times;
                              </button>
                              {state.passwordUpdateError}
                              </div>
                              :
                              null
                        }
                  </div>
                  <div class="mt-4">
                    <button type="submit" class="btn btn-block btn-sm btn-soft-primary rounded-pill">Update password</button>
                  </div>
                </form>
                <br/>
                <hr/>
                <div class="card">
                <div class="card-header">
                  <h5 class=" h6 mb-0">Danger zone</h5>
                </div>
                <div class="card-body">
                  <button type="button" class="btn btn-sm btn-block btn-soft-danger rounded-pill" data-toggle="modal" data-target="#modal-delete-account">Delete account</button>
                  <div class="modal modal-danger fade" 
                  id="modal-delete-account" 
                  tabindex="-1" 
                  role="dialog" 
                  aria-labelledby="modal-delete-account" 
                  aria-hidden="true" style={{display: 'none'}}>
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-body">
                      <form onSubmit={deleteAccount} class="form-danger">
                      {
                      msg ?
                      <div className="alert alert-success alert-dismissible">
                        <button className="btn btn-action-label" data-dismiss='alert'>
                          &times;
                          </button>
                          {msg}
                          </div>
                          : null
                    }
                    {
                      error ?
                      <div className="alert alert-danger alert-dismissible">
                        <button className="btn btn-action-label" data-dismiss='alert'>
                          &times;
                          </button>
                          {error}
                          </div>
                          : null
                    }
                            <div class="text-center">
                              <i class="far fa-exclamation-circle fa-3x opacity-8"></i>
                              <h5 class="text-white mt-4">Should we stop now?</h5>
                              <p class="text-sm text-sm">All your data will be erased</p>
                            </div>
                            <div class="form-group">
                              <label class="form-control-label text-white">School's Identification Number</label>
                              <input onChange={change} required name='school_id' class="form-control form-control-emphasized" type="text"/>
                            </div>
                            <div class="form-group">
                              <label class="form-control-label text-white">To verify, type <span class="font-italic">delete my account</span> below</label>
                              <input  name='verifyDelete' onChange={change} required class="form-control form-control-emphasized" type="text"/>
                              {
                              state.deleteMessage === 'text must be in lower case or text does not match' ?
                              <div className="alert alert-danger alert-dismissible"><button class='btn btn-action-label' data-dismiss='alert'
                              onClick={setNull}
                              >&times;</button>{state.deleteMessage}</div>
                              :
                              null
                            }
                            </div>
                            <div class="form-group">
                              <label class="form-control-label text-white">Your password</label>
                              <input  onChange={change} name='password' required class="form-control form-control-emphasized" type="password"/>
                              {
                              state.deleteMessage === "Password Incorrect or doesn't match" ?
                              <div className="alert alert-danger alert-dismissible"><button class='btn btn-action-label' data-dismiss='alert'
                              onClick={setNull}
                              >&times;</button>{state.deleteMessage}</div>
                              :
                              null
                            }
                            </div>
                            <div class="mt-4">
                              <button type="submit" class="btn btn-block btn-sm btn-white text-danger rounded-pill">Delete my account</button>
                              <button type="button" class="btn btn-block btn-sm btn-link text-light mt-4" data-dismiss="modal">Not this time</button>
                            </div>
                      </form>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
  )
}
export const SchoolUpdate=({submit,
  logoUpload,
  uploadLogo,
  imageUpload,
  uploadImage,
  handleChange,
  state,
  updateData,
  error,
  msg
})=>{
  return(
      <form onSubmit={updateData}>
        {
          error ?
          <div className="alert alert-danger">{error}</div>
          :
          null
        }
        {
          msg ?
          <div className="alert alert-success">{msg}</div>
          :
          null
        }
      <div className='row'>
      <div className='col border-right border-bottom mb-2'>

      {
            state.logo==='no logo' ? 
            <div  className="card-profile-image avatar avatar-xl bg-primary rounded-circle shadow hover-shadow-lg">
                <h1 onClick={logoUpload} className='text-white'>
                    {state.schoolName.slice(0,1)}
                    </h1>
                    <input onChange={uploadLogo} type="file" id="updateLogo" name='logo' style={{display: "none"}}/>
            </div>
            :
        <>
            <img onClick={logoUpload} alt="" src={state.logo} class="card-profile-image avatar-xl avatar rounded-circle shadow hover-shadow-lg"/>
            <input onChange={uploadLogo} type="file" id="updateLogo" name='logo' style={{display: "none"}}/>
            </>
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
         value={state.schoolEmail}
          placeholder="Enter Email"
          required onChange={handleChange}/>
    </div>
    <div class="form-group">
      <label for="address">School's Address</label>
      <input class="form-control"
       id="address"
        type="text"
         name="address"
         value={state.address}
          placeholder="School's Address"
          required onChange={handleChange}/>
    </div>
    <div className='form-group'>
      <label>School System</label>
      <select className='form-control' value={state.clas} required onChange={handleChange} name='clas'>
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
                                               <input list="states" value={state.state} required onChange={handleChange} placeholder='Please select State Of Origin' className='form-control-emphasized form-control' name="state" id="state"/>
                                               <datalist id="states" value={state.state}>
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
                                                 <input list="lgas" value={state.lga} required onChange={handleChange} placeholder='Please select LGA' className='form-control-emphasized form-control' name="lga" id="lga"/>
                                               <datalist id="lgas" value={state.lga}>
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
            state.image==='no image' ? 
            <div className="card-profile-image avatar avatar-xl bg-primary rounded-circle shadow hover-shadow-lg">
                <h1 className='text-white' onClick={imageUpload}>
                    {state.firstName.slice(0,1)+state.lastName.slice(0,1)}
                    </h1>
                    <input onChange={uploadImage} type="file" id="updateImage" name='image' style={{display: "none"}}/>
            </div>
            :
            <>
            <img onClick={imageUpload} alt="" src={state.image} class="card-profile-image avatar-xl avatar rounded-circle shadow hover-shadow-lg"/>
            <input onChange={uploadImage} type="file" id="updateImage" name='image' style={{display: "none"}}/>
        </>
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
         value={state.ownerEmail}
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
         value={state.number}
          placeholder="Mobile Number"
          required onChange={handleChange}/>
      </div>
    </div>
        </div>
      </div>
        <button class="btn btn-primary btn-block" type="submit" value="Update">Update</button>
        {
          error ?
          <div className="alert alert-danger">{error}</div>
          :
          null
        }
        {
          msg ?
          <div className="alert alert-success">{msg}</div>
          :
          null
        }
      </form>
  )
}