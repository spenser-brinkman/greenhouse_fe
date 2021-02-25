import React, { Component } from 'react'

import NewPlant from './components/NewPlant/'
import NewSpace from './components/NewSpace/'

import './styles.scss'

class AppButtons extends Component {
  render(){
    return (
      <div id="app-buttons">
        <NewPlant />
        <NewSpace />
      </div>
    )
  }
}

export default AppButtons