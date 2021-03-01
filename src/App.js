import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './containers/Header/'
import UnassignedPlants from './containers/UnassignedPlants/'
import Spaces from './containers/Spaces/'

import './styles.scss'

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <UnassignedPlants />
        <div id="vertical-line" />
        <Spaces />
      </>
    )
  }
}


export default App;
