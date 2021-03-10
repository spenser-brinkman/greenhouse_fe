import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { logout } from '../../../../../../services/actions/userActions'

import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'

import './styles.scss'

class MenuOptions extends Component {

  handleLogout = () => {
    this.props.logout()
    this.props.onClick()
  }

  render(){
    return (
        <div className={this.props.showMenu ? "menu" : "menu hidden"}>
          <ul>
            <Route exact path="/menu">
              {localStorage.token
                ? <li><NavLink className="menuLink" to="/" onClick={this.handleLogout} >Log Out</NavLink></li>
                : <>
                    <li><NavLink className="menuLink" to="/menu/login" >Log In</NavLink></li>
                    <li><NavLink className="menuLink" to="/menu/signup">Sign Up</NavLink></li>
                  </>
              }
              <li><NavLink className="menuLink" to="/menu/about">About</NavLink></li>
            </Route>
            <Route path="/menu/login" component={Login} />
            <Route path="/menu/signup" component={Signup} />
            <Route path="/menu/about" component={About} />
          </ul>
        </div>
    )
  }
}

const mstp = state => {
  return {
    user: state.user
  }
}

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mstp, mdtp)(MenuOptions)