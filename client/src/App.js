import './App.css';
import Login from './components/Login'
import React, { Component } from 'react'
import { Route,BrowserRouter as Router,Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav';
import Students from './components/Students'
import News from './components/News';
import Bills from './components/Bill';
import Dashboard from './components/Dashboard';
import Teachers from './components/Teachers';
import { ptfNotifications } from './notification';
import { OwnerServer } from './servers';
import PTF from './components/PTF';
import Profile from './components/Profile';
import DebtManagement from './components/DebtManagement';
export default class App extends Component {
  UNSAFE_componentWillMount() {
    // localStorage.removeItem('token')
    axios.interceptors.request.use(function (config) {
      const token = localStorage.token;
      config.headers.Authorization =  token;
      
      return config;
    });
    axios.defaults.headers.common['Authorization'] = localStorage.token
    if(localStorage.token){
    }
    ptfNotifications()
    
  }
  

render() {
    const decode = localStorage.token ? jwt_decode(localStorage.token) : null
  
          

    const loginRoutes = (

          <Switch>
          <Route exact path='/' component={Login}/>
            <Route path='/signUp' component={SignUp}/>
          </Switch>
    )
    const teacher=(
      <Switch>
        <Route exact path ='/' component={PTF}/>
      </Switch>
    )
    const parent=(
      <Switch>
        <Route exact path ='/' component={PTF}/>
      </Switch>
    )
    const owner=(
  <Switch>
    <Route exact path ='/' component={Profile}/>
          <Route  path='/students' component={Students}/>
          <Route  path='/teachers' component={Teachers}/>
          <Route  path='/news' component={News}/>
          <Route  path='/bills' component={Bills}/>
          <Route  path='/ptf' component={PTF}/>
          <Route  path='/profile' component={Profile}/>
          <Route path='/debt' component={DebtManagement}/>
          </Switch>
)
const userRoutes = localStorage.token ? decode.type==='owner' ? owner : decode.type==='parent' ? parent : teacher : null
    return (
        <div className='container-fluid container-application'>
      <Router>
          {localStorage.token ? <SideNav/> : null}
          
          {localStorage.token ? userRoutes : loginRoutes}


      </Router>
        </div>
    )
  }
}
