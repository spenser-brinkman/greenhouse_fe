import React, { Component } from 'react';

import './styles.scss'

class MenuButton extends Component {

  render(){
    return (
      <button id="menu-button">
        <img
          tabIndex="0"
          onKeyPress={event => event.code === "Enter" ? this.props.onClick() : null }
          onClick={this.props.onClick}
          id="burger-icon"
          className={this.props.color === 'green' ? 'green-burger' : 'orange-burger'} 
        />
      </button>
    )
  }
}

export default MenuButton