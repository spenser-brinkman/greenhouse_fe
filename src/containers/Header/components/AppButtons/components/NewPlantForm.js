import React, { Component } from 'react';
import { connect } from 'react-redux'

import { closeDropdown } from '../../../../../services/actions/headerActions'
import { createPlant, fetchPlants } from '../../../../../services/actions/plantActions'

const defaultState = {
  species: '',
  lightReq: '',
  humidityReq: '',
  waterFreq: '',
  lastWater: '',
  lastFert: '',
  comments: ''
}

class NewPlantForm extends Component {

  state = defaultState

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createPlant(this.state);
    this.setState(defaultState);
    this.props.closeDropdown();
  }

  render(){
    return (
      <div className={this.props.showPlantForm ? "menu" : "menu hidden"} >
        <form onSubmit={this.handleSubmit} id="new-plant-form" className="dropdown-form">
          
          <h2>New Plant</h2>
          <br />
          
          <h3>Species:</h3>
          <input required type="text" name="species" value={this.state.species} onChange={this.handleChange} />
        
          <h3>Light Requirement (1-5):</h3>
          <input required type="text" name="lightReq" value={this.state.lightReq} onChange={this.handleChange} />
        
          <h3>Humidity Requirement (1-5):</h3>
          <input required type="text" name="humidityReq" value={this.state.humidityReq} onChange={this.handleChange} />
        
          <h3>Watering Frequency (every "__" days):</h3>
          <input required type="text" name="waterFreq" value={this.state.waterFreq} onChange={this.handleChange} />
        
          <h3>Date Last Watered:</h3>
          <input required type="date" name="lastWater" value={this.state.lastWater} onChange={this.handleChange} />
        
          <h3>Date Last Fertilized:</h3>
          <input required type="date" name="lastFert" value={this.state.lastFert} onChange={this.handleChange} />
        
          <h3>Comments:</h3>
          <input type="text" name="comments" value={this.state.comments} onChange={this.handleChange} />
        
          <input type="submit" value="Create" />
          
        </form>
      </div>
    )
  }
}

const mstp = state => {
  return {
    showPlantForm: state.header.showPlantForm
  }
}

const mdtp = dispatch => {
  return {
    closeDropdown: () => dispatch(closeDropdown),
    createPlant: body => dispatch(createPlant(body)),
    fetchPlants: () => dispatch(fetchPlants())
  }
}

export default connect(mstp, mdtp)(NewPlantForm)