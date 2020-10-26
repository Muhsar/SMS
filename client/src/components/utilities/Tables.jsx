import React from 'react';
import jwt_decode from 'jwt-decode'
const decode = localStorage.token ? jwt_decode(localStorage.token) : null
export const ResultTable=({result,toggleDelete})=>{
  return(
    <>
    {
      (result.length)?(
        result.map(result=>{
          return(
            <tr key={result._id}>
              {
                decode.type==='teacher' ? 
                <td colspan='2' onClick={toggleDelete}>{result.subject}</td>
                : 
                <td colspan='2'>{result.subject}</td>
              }
            <td colspan='1'>{result.test}</td>
            <td colspan='1'>{result.exam}</td>
            <td class="text-right" colspan='1'>{result.total}</td>
            <td class="text-right" colspan='1'>{result.grade}</td>
            <td class="text-right" colspan='2'>{result.remarks}</td>
  
            </tr>
          )
        })
      ):(
        <tr class="odd"><td valign="top" colspan="13" class="dataTables_empty text-center">No data available in table</td></tr>
      )
    }
    </>
  )
}
export const StudentList=({students,update,remove,info,debtor,result})=>{
    return(
      <tbody class='list' id='sortTable'>
      {
        students.length ? students.map(student=>{
          return(
            <tr>
                  <th scope="row">
                    <div class="media align-items-center">
                      <div>
                        {
                          student.image==='no image' ? 
                          <div className="avatar bg-primary rounded-circle">
                            {student.surname.slice(0,1)}{student.name.slice(0,1)}
                          </div>
                          :
                        <div class="avatar-parent-child">
                          <img alt="" src={student.image} class="avatar  rounded-circle"/>
                        </div>
                        }
                      </div>
                      <div class="media-body ml-4">
                        <a href="#" class="name h6 mb-0 text-sm">{student.surname} {student.name}</a>
                        <small class="d-block font-weight-bold">{student.student_id}</small>
                      </div>
                    </div>
                  </th>
                  <td >
                    {student.age}
                  </td>
                  <td scope='col' class='budget'>
                    {student.clas}
                  </td>
                  <td scope='col'>
                    {student.religion}
                  </td>
                  <td scope='col'>
                    <p href='#debtorModal' data-toggle='modal' onClick={()=>debtor(student.student_id)} className={student.feeStatus==='debtor' ? 'badge badge-soft-danger' : 'badge badge-soft-success'}>
                    {student.feeStatus}
                    </p>  
                    </td>
                  <td scope='col'>{student.gender}</td>
                  <td scope='col'>
                    <div style={{maxWidth: '100px', position: 'relative'}}>
                                         <div class="resize-triggers"><div class="expand-trigger"><div style={{width: '101px', height: '31px'}}></div></div><div class="contract-trigger"></div></div></div>
                  </td>
                  <td scope='col' class="text-right">
                    <div class="actions ml-2">
                      <a href="#studentInfo" onClick={()=>info(student.student_id)} class="action-item mr-2" data-toggle="modal" >
                        <i class="far fa-external-link-alt"></i>
                      </a>
                      <a href="#resultModal" onClick={()=>result(student.student_id)} class="action-item mr-2" data-toggle="modal" >
                        <i class="far fa-list-alt"></i>
                      </a>
                      <a href="#updateStudent" class="action-item mr-2" onClick={()=>update(student.student_id)} data-toggle="modal">
                        <i class="far fa-pencil-alt"></i>
                      </a>
                      <a href="#" class="action-item text-danger mr-2" onClick={()=>remove(student.student_id)} data-toggle="tooltip" >
                        <i class="far fa-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
          )
        })
        : null
      }
                
                
              </tbody>
    )
}
export const AllNews=({news,remove,update})=>{
  return(
    <>
    {
      news.length ? news.map(news=>{
        return(
          <div class="card overflow-hidden" data-animate-hover="2">
    <div class="overflow-hidden">
    <div className="card-header">
      <div className="row">
        <div className="col"></div>
        <div className="col text-right">
              <button type='button' class="action-item text-danger mr-2" onClick={()=>remove(news._id)}>
                        <i class="far fa-trash"></i>
                      </button>
                      <a href='#updateNews' data-toggle="modal" type='button' class="action-item text-info mr-2" onClick={()=>update(news._id)}>
                        <i class="far fa-pencil-alt"></i>
                      </a>
              </div>
      </div>
    </div>
        <div class="animate-this text-white">
            <a href="#">
                <img alt="" src={news.image==='no image' ? "../../../img/theme/light/img-1-800x600.jpg"
              : news.image  
              } class="card-img-top"/>
                <div class="card-img-overlay d-flex align-items-end">
            <div class="col text-center">
                <p href="#" class="h4 text-white d-block">{news.month}</p>
                <p href="#" class="text-white">{news.day}</p>
            </div>
        </div>
            </a>
        </div>
    </div>
    
    <div class="card-body py-5 text-center">
        <a href="#" class="d-block h5 lh-150">{news.title}</a>
        <h6 class="text-muted mt-4 mb-0">{news.content}</h6>
    </div>
    
</div>
        )
      })
      : null
    }
    </>
    
  )
}
export const TeacherList=({teachers,update,remove})=>{
  return(
    <div class="row" id='myTeachers'>
      {
        teachers.length ? teachers.map(teacher=>{
          return(
            <div class="col-xl-4 col-lg-4 col-sm-6 myTeachers">
            <div class="card hover-shadow-lg">
              <div class="card-header border-0 pb-0">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="mb-0">{teacher.surname+' '+teacher.name}</h6>
                  </div>
                  <div class="text-right">
                    <div class="actions">
                      <a href="#updateTeacher" data-toggle='modal' onClick={()=>update(teacher.teacher_id)} class="action-item">
                        <i class="far text-info fa-pencil-alt">
                          </i>
                          </a>
                      |
                      <a href="#" onClick={()=>remove(teacher.teacher_id)} class="action-item"><i class="far text-danger fa-trash-alt"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              
              <div class="card-body text-center">
              {
          teacher.image==='no image' ? 
          <div className='bg-primary avatar rounded-circle avatar-lg mr-3 hover-translate-y-n3'>
          {teacher.surname.slice(0,1)} {teacher.name.slice(0,1)}
          </div>
          :
      <img class="align-self-center mr-3 avatar avatar-lg hover-translate-y-n3" alt="" src={teacher.image}/>
        }
                
                <h5 class="h6 my-4">{teacher.teacher_id}</h5>
                <p class="text-muted">{teacher.clas}</p>
                
                <ul class="list-group list-group-flush">

                                        
                                          <li class="list-group-item">
                                            <div className='row'>
                                              <div className='col'>Gender:</div>
                                              <div className='col'>{teacher.gender}</div>
                                            </div>
                                          </li>


                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Address:</div>
                                            <div className='col'>{teacher.address}</div>
                                          </div>
                                          </li>


                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Email Address:</div>
                                            <div className='col'>{teacher.email}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Mobile Number:</div>
                                            <div className='col'>{teacher.number}</div>
                                          </div>
                                          </li>

                                      </ul>
            </div>
            </div>
            </div>
          )
        })
        : 
        null
      }
    
          </div>
  )
}
export const AllBills=({bill,update,remove,sum})=>{
  return(
    <>
  {
    bill.length ? bill.map(bill=>{
    return(

    <div class="card col-md-10 mx-auto" >
           
       
    
    <div class="card-body py-5 table-responsive">
      <details>
            <div class="row justify-content-between align-items-center">
            <div class="col text-left">
              {bill.clas}
              </div>
              <div className="col text-right">
              <button type='button' class="action-item text-danger mr-2" onClick={()=>remove(bill._id)}>
                        <i class="far fa-trash"></i>
                      </button>
                      <a href='#updateBill' data-toggle="modal" type='button' class="action-item text-info mr-2" onClick={()=>update(bill._id)}>
                        <i class="far fa-pencil-alt"></i>
                      </a>
              </div>
              </div>
          <summary>
          {bill.clas}
            </summary>
    <table class="table table-bordered">

<tbody>
<tr>
<td colspan='3'>School Fees</td>
<td>#{bill.fees}</td>
</tr>
<tr>
<td colspan='3'>Uniform</td>
<td>#{bill.uniform}</td>
</tr>
<tr>
<th></th>
<th>No. Of Exercise Books Needed</th>
<th>Price Per book</th>
<th>Total</th>
</tr>
<tr>
<th>Exercise Book</th>
<th>#{bill.exerciseBooks}</th>
<th>#{bill.pricePerBook}</th>
<th>#{bill.exerciseBooks*bill.pricePerBook}</th>
</tr>
<tr>
<th colspan='4'>Text Books</th>
</tr>
<tr>
<th colspan='2'>Name</th>
<th colspan='2'>Price</th>
</tr>
{
  bill.textBooks.map(textbook=>{
    return(
    <tr>
      <th colspan='2'>{textbook.name}</th>
      <th colspan='2'>#{textbook.price}</th>
    </tr>
    )
  })
}
<tr>
  <th colspan='3'>TextBook Total</th>
  <th colspan='1'>#{sum(bill.textBooks.map(price=>(price.price)))}</th>
</tr>

<tr>
<th colspan='3'>Total</th>
<th>
#{bill.fees+bill.uniform+(bill.exerciseBooks*bill.pricePerBook)+(sum(bill.textBooks.map(price=>(price.price))))}
</th>
</tr>
</tbody>
</table>
</details>
    </div>
    
</div>
    )
  })
  :
  null
}
</>
 )
}
export const AllChats=({chats})=>{
  return(
    <>
    {
      chats.length ? chats.map(chat=>{
        return(
          <div class={chat.sender_id===decode._id ? "send-mess-wrap" : "recei-mess-wrap"}>
      <div class={chat.sender_id===decode._id ? "send-mess__inner" : "recei-mess__inner"} >
      {
        chat.sender_id!==decode._id ?
        <div class="avatar avatar-sm">
      </div>
      : null
      }
          <div class={chat.sender_id===decode._id ? "send-mess-list" : "recei-mess-list"}>
              <div class={chat.sender_id===decode._id ? "send-mess" : "recei-mess"}>{chat.message}</div>
              <span class={`mess-time + ${decode._id===chat.sender_id ? '' : 'float-left'}`}>
              {(chat.sender_id===decode._id)?('me'):(chat.name)}
              </span>
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