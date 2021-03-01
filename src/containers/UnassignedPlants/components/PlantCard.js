import React, { Component } from 'react';

import { connect } from 'react-redux'

// import './styles.scss'

class PlantCard extends Component {
  render() {
    return (
      <div>
        {this.props.plant.attributes.species}
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