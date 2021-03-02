import React, { Component } from 'react';
import { connect } from 'react-redux'

class PlantCard extends Component {
  
  render() {
    let plant = this.props.plant
    return(
      <>
        <li>Light: {plant.lightReq}</li>
        <li>Humidity: {plant.humidityReq}</li>
        <li>Water Every {plant.waterFreq} Days</li>
        <li>Last Watered: {plant.lastWater}</li>
        <li>Last Fertilized: {plant.lastFert}</li>
        <li>Comments: {plant.comments}</li>
      </>
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