import React, { Component } from 'react'

import NewPlantButton from './components/NewPlantButton'
import NewPlantForm from './components/NewPlantForm'
import NewSpaceButton from './components/NewSpaceButton'
import NewSpaceForm from './components/NewSpaceForm'

import './styles.scss'

class AppButtons extends Component {
  render(){
    return (
      <div id="app-buttons">
        <NewPlantButton />
        <NewPlantForm />
        <NewSpaceButton />
        <NewSpaceForm />
      </div>
    )
  }
}

export default AppButtons