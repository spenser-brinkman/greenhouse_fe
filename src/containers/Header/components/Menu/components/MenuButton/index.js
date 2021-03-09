import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './styles.scss'

class MenuButton extends Component {

  render(){
    return (
      <button id="menu-button">
        <Link to="/menu">
          <img
            tabIndex="0"
            onKeyPress={event => event.code === "Enter" ? this.props.onClick() : null }
            onClick={this.props.onClick}
            id="burger-icon"
            className={this.props.color === 'green' ? 'green-burger' : 'orange-burger'} 
            alt="Button To Open Menu"
          />
        </Link>
      </button>
    )
  }
}

export default MenuButton