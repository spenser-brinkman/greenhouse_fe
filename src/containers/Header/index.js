import React, { Component } from 'react';
import { connect } from 'react-redux'

import AppButtons from './components/AppButtons/'
import Logo from './components/Logo/'
import Menu from './components/Menu/'

import './styles.scss'

class Header extends Component {
  render(){
    return (
      <>
        <div id="header">
          <AppButtons />
          <Logo />
          <Menu />
        </div>
        <hr className="line" />
      </>
    )
  }
}

export default Header