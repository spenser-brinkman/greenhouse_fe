import React, { Component } from 'react'

import NewPlantButton from './components/NewPlantButton'
import NewPlantForm from './components/NewPlantForm'

import './styles.scss'

class NewPlant extends Component {
  render(){
    return (
      <div>
        <NewPlantButton />
        <NewPlantForm />
      </div>
    )
  }
}

export default NewPlant