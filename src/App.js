import React, { Component } from 'react';

import Header from './containers/Header/'
import UnassignedPlants from './containers/UnassignedPlants/'
import Spaces from './containers/Spaces/'

import './styles.scss'

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <div className="content">
          <UnassignedPlants />
          <div id="vertical-line" />
          <Spaces />
        </div>
      </>
    )
  }
}


export default App;
