import React from 'react';
import jwt_decode from 'jwt-decode'
const decode = localStorage.token ? jwt_decode(localStorage.token) : null
export const ChangeType=({state,teacher,owner,guardian})=>{
    return(
        <div className='row mt-3'>
        {
          state.type==='owner' ?
          <React.Fragment>
          <div className='col'><button onClick={teacher} type="button" className='btn btn-block btn-outline-primary'>Teacher</button></div>
          <div className='col'><button onClick={guardian} type="button" className='btn btn-block btn-outline-success'>Parent/Guardian</button></div>
          </React.Fragment>
          :
          state.type==='teacher' ?
          <React.Fragment>
          <div className='col'><button onClick={owner} type="button" className='btn btn-block btn-outline-info'>Owner</button></div>
          <div className='col'><button onClick={guardian} type="button" className='btn btn-block btn-outline-success'>Parent/Guardian</button></div>
          </React.Fragment>
          :
          <React.Fragment>
          <div className='col'><button onClick={owner} type="button" className='btn btn-block btn-outline-info'>Owner</button></div>
          <div className='col'><button onClick={teacher} type="button" className='btn btn-block btn-outline-primary'>Teacher</button></div>
          </React.Fragment>
        }
      </div>
    )
}