import React, { Component } from 'react';
import { connect } from 'react-redux'

import PlantInfo from './components/PlantInfo'

import './styles.scss'

class PlantCard extends Component {

  render() {
    return (
      <div className="plant-card">
        <div className="holder card-content">
          <PlantInfo plant={this.props.plant} />
        </div>
      </div>
    )
  }
}

const mstp = state => {
  return {

  }
}

const mdtp = dispatch => {
  return {

  }
}

export default PlantCard