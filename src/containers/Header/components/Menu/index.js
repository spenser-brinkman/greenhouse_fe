import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

import { openMenu, closeDropdown } from '../../../../services/actions/headerActions'

import MenuButton from './components/MenuButton/'
import MenuOptions from './components/MenuOptions/'

import './styles.scss'

class Menu extends Component {

  toggleMenu = () => {
    this.props.showMenu ? this.props.closeMenu() : this.props.openMenu()
  }

  render(){
    return (
      <div id="menu-container">
        <MenuButton onClick={this.toggleMenu} color={this.props.burgerColor} />
        <Route path="/menu">
          <MenuOptions onClick={this.toggleMenu} showMenu={this.props.showMenu} />
        </Route>
      </div>
    )
  }

}

const mstp = state => {
  return {
    burgerColor: state.header.burgerColor,
    showMenu: state.header.showMenu
  }
}

const mdtp = dispatch => {
  return {
    openMenu: () => dispatch(openMenu),
    closeMenu: () => dispatch(closeDropdown)
  }
}

export default connect(mstp, mdtp)(Menu)