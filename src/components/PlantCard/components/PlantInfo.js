import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../styles.scss'

class PlantInfo extends Component {

  state = {
    open: false
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  plantDetails = () => {
    let plant = this.props.plant
    return (
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

  render() {
    return(
      <ul className="plant">
        <p className={this.state.open ? "open" : "closed"} onClick={this.handleClick}>{this.props.plant.species}</p>
        {this.state.open && this.plantDetails()}
      </ul>
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

export default PlantInfo