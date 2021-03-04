import React, { Component } from 'react';
import { connect } from 'react-redux'

import { editPlant, deletePlant } from '../../../services/actions/plantActions'

import '../styles.scss'

class PlantInfo extends Component {

  state = {
    open: false,
    editorOpen: false,
    editFields: {
      id: this.props.plant.id,
      species: this.props.plant.species,
      lightReq: this.props.plant.lightReq,
      humidityReq: this.props.plant.humidityReq,
      waterFreq: this.props.plant.waterFreq,
      lastWater: this.props.plant.lastWater,
      lastFert: this.props.plant.lastFert,
      comments: this.props.plant.comments,
      spaceId: this.props.plant.spaceId
    }
  }

  dragStart = event => {
    const plant = JSON.stringify(this.props.plant)
    event.dataTransfer.setData("plant", plant)
  }

  dragOver = event => {
    event.stopPropagation();
  }

  toggleDetails = () => {
    this.setState({
      open: !this.state.open,
      editorOpen: false
    })
  }

  toggleEditForm = () => {
    this.setState({
      editorOpen: !this.state.editorOpen
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
        <button onClick={this.toggleEditForm}>Edit Plant</button>
      </>
    )
  }

  handleFieldChange = event => {
    this.setState({
      editFields: {...this.state.editFields, [event.target.name]: event.target.value}
    }, () => console.log(this.state))
  }

  submitEditPlant = event => {
    event.preventDefault();
    this.props.editPlant(this.state.editFields);
    this.toggleEditForm()
  }

  deletePlant = event => {
    event.preventDefault();
    this.props.deletePlant(this.props.plant.id)
  }

  editPlantForm = () => {
    return (
      <form onSubmit={this.submitEditPlant}>
        <li>Light Requirement: <input type="text" name="lightReq" value={this.state.editFields.lightReq} onChange={this.handleFieldChange} /></li>
        <li>Humidity Requirement: <input type="text" name="humidityReq" value={this.state.editFields.humidityReq} onChange={this.handleFieldChange} /></li>
        <li>Watering Frequency: <input type="text" name="waterFreq" value={this.state.editFields.waterFreq} onChange={this.handleFieldChange} /></li>
        <li>Date Last Watered: <input type="date" name="lastWater" value={this.state.editFields.lastWater} onChange={this.handleFieldChange} /></li>
        <li>Date Last Fertilized: <input type="date" name="lastFert" value={this.state.editFields.lastFert} onChange={this.handleFieldChange} /></li>
        <li>Comments: <input type="text" name="comments" value={this.state.editFields.comments} onChange={this.handleFieldChange} /></li>
        <li>
          <input type="submit" value="Submit" />
          <button onClick={this.deletePlant}>Delete</button>
          <button onClick={this.toggleEditForm}>Cancel</button>
        </li>
      </form>
    )
  }

  render() {
    return(
      <ul
        className="plant"
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        draggable="true"
      >
        <p className={this.state.open ? "open" : "closed"} onClick={this.toggleDetails}>{this.props.plant.species}</p>
        {this.state.open && !this.state.editorOpen && this.plantDetails()}
        {this.state.editorOpen && this.editPlantForm()}
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
    editPlant: plant => dispatch(editPlant(plant)),
    deletePlant: id => dispatch(deletePlant(id))
  }
}

export default connect(null, mdtp)(PlantInfo)