import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';

import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'

import './styles.scss'

class MenuOptions extends Component {

  render(){
    return (
        <div className={this.props.showMenu ? "menu" : "menu hidden"}>
          <ul>
            <Route exact path="/menu">
              <li><NavLink className="menuLink" to="/menu/login" >Log In</NavLink></li>
              <li><NavLink className="menuLink" to="/menu/signup">Sign Up</NavLink></li>
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

export default MenuOptions