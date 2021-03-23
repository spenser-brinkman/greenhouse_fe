import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';

import NewPlantButton from './components/NewPlantButton'
import NewPlantForm from './components/NewPlantForm'
import NewSpaceButton from './components/NewSpaceButton'
import NewSpaceForm from './components/NewSpaceForm'

import './styles.scss'

class AppButtons extends Component {
  render(){
    return (
      <div id="app-buttons">
        <Router>
          <NewPlantButton />
          <Route path='/new-plant'>
            <NewPlantForm />
          </Route>
          
          <NewSpaceButton />
          <Route path='/new-space'>
            <NewSpaceForm />
          </Route>
        </Router>
      </div>
    )
  }
}

export default AppButtons