import React, { Component } from 'react'
// import Login from './components/Login/'
// import Signup from './components/Signup/'
// import About from './components/About'

import './styles.scss'

class MenuOptions extends Component {

  render(){
    return (
      <div className={this.props.showMenu ? "menu" : "menu hidden"}>
        <ul>
          <li><button onClick={this.props.onClick} className="menuLink">Log In</button></li>
          <li><button onClick={this.props.onClick} className="menuLink">Sign Up</button></li>
          <li><button onClick={this.props.onClick} className="menuLink">About</button></li>
        </ul>
      </div>
    )
  }
}

export default MenuOptions