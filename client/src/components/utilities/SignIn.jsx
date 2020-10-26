import React from 'react';
import jwt_decode from 'jwt-decode'
const decode = localStorage.token ? jwt_decode(localStorage.token) : null

export const OwnerLogin=({handleSubmit,handleChange})=>{
    return(
        <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="schoolEmail">School's Email</label>
        <input class="form-control"
        id="schoolEmail"
        type="email"
         name="schoolEmail"
          placeholder="Enter School's Email"
          required onChange={handleChange}/>
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
        id="password"
        type="password"
         name="password"
          placeholder="Enter Password"
          required onChange={handleChange}/>
        </div>
        <button class="btn btn-outline-info btn-block" type="submit" value="Register">Login <i className='fa fa-fw fa-sign-in-alt'/></button>
        </form>
    )
}
export const TeacherLogin=({handleSubmit,handleChange})=>{
    return(
        <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="login">Teacher's ID or Email</label>
        <input class="form-control"
         id="login"
          type="login"
           name="login"
            placeholder="Enter Teacher's ID or Email Address"
            required onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
         id="password"
          type="password"
           name="password"
            placeholder="Enter Password"
            required onChange={handleChange}/>
      </div>
          <button class="btn btn-outline-primary btn-block" type="submit" value="Register">Login <i className='fa fa-fw fa-sign-in-alt'/></button>
        </form>
    )
}
export const ParentLogin=({handleSubmit,handleChange})=>{
    return(
        <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="login">Student's ID or Email Address</label>
        <input class="form-control"
         id="login"
          type="text"
           name="login"
            placeholder="Enter Student's ID or Guardian's Email Address"
            required onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
         id="password"
          type="password"
           name="password"
            placeholder="Enter Password"
            required onChange={handleChange}/>
      </div>
          <button class="btn btn-outline-success btn-block" type="submit" value="Register">Login <i className='fa fa-fw fa-sign-in-alt'/></button>
        </form>
    )
}