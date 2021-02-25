import React, { Component } from 'react';

import './styles.scss'

class MenuButton extends Component {
  render(){
    return (
      <button id="menu-button">
        <div
          onClick={this.props.onClick}
          id="burger-icon"
          className={this.props.color === 'green' ? "green-burger" : "orange-burger"}
        ></div>
      </button>
    )
  }
}

export default MenuButton