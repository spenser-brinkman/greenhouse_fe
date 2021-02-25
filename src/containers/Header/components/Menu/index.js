import React, { Component } from 'react'
import MenuButton from './components/MenuButton/'
import MenuOptions from './components/MenuOptions/'

import './styles.scss'

class Menu extends Component {

  state = {
    burgerColor: 'green',
    showMenu: false
  }

  colorOptions = {
    'green': 'red',
    'red': 'green'
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
      burgerColor: this.colorOptions[this.state.burgerColor]
    })
  }

  render(){
    return (
      <div id="menu-container">
        <MenuButton onClick={this.toggleMenu} color={this.state.burgerColor} />
        <MenuOptions onClick={this.toggleMenu} showMenu={this.state.showMenu} />
      </div>
    )
  }

}

export default Menu