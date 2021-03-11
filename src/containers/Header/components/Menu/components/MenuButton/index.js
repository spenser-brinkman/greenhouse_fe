import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import './styles.scss'

class MenuButton extends Component {

  burgerColor = () => this.props.color === 'green' ? 'green-burger' : 'orange-burger'

  render(){
    return (
      <button id='menu-button'>
        <Link to={this.props.showMenu ? '/' : '/menu'}>
          <img
            tabIndex='0'
            onKeyPress={event => event.code === 'Enter' ? this.props.onClick() : null }
            onClick={this.props.onClick}
            id='burger-icon'
            className={this.burgerColor()}
            alt='Button To Open Menu'
          />
        </Link>

      </button>
    )
  }
}

const mstp = state => {
  return {
    showMenu: state.header.showMenu
  }
}

const mdtp = dispatch => {
  return {

  }
}

export default connect(mstp, mdtp)(MenuButton)