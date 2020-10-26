import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import TopNav from './TopNav'
export default class Dashboard extends Component {
    render() {
        const decode = jwt_decode(localStorage.token)
        return (
        <div className="main-content position-relative">
                <TopNav/>
            <div className='page-content'>
                <div class="card card-profile hover-shadow-lg hover-translate-y-n10">
    <div class="card-profile-cover">
        <img alt="" src={decode.logo} class="card-img-top"/>

    </div>
    <a href="#" class="mx-auto">
        {
            decode.image==='no image' ? 
            <div className="card-profile-image avatar  bg-primary rounded-circle shadow hover-shadow-lg">
                <h1 className='text-white'>
                    {decode.firstName.slice(0,1)}{decode.lastName.slice(0,1)}
                    </h1>
            </div>
            :
        <img alt="" src={decode.image} class="card-profile-image avatar rounded-circle shadow hover-shadow-lg"/>
        }
    </a>
    <div class="card-body p-3 pt-0 text-center">
        <h5 class="mb-0">{decode.firstName+' '+decode.lastName}</h5>
        <span class="d-block text-muted mb-3">{decode.school_id}</span>
        


        <div class="actions d-flex justify-content-between mt-3 pt-3 px-5 delimiter-top">
            <a href="#" class="action-item">
                <i class="far fa-envelope"></i>
            </a>
            <a href="#" class="action-item">
                <i class="far fa-user"></i>
            </a>
            <a href="#" class="action-item">
                <i class="far fa-chart-pie"></i>
            </a>
            <a href="#" class="action-item text-danger">
                <i class="far fa-trash-alt"></i>
            </a>
        </div>
    </div>
</div>
            </div>
    <div class="sidenav-mask mask-body d-xl-none" data-action="sidenav-unpin" data-target="#sidenav-main"></div>

            </div>
        )
    }
}
