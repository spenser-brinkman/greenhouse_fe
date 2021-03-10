import React, { Component } from 'react';
import { connect } from 'react-redux'

import { editPlant } from '../../services/actions/plantActions'
import PlantCard from '../../components/PlantCard/'

import './styles.scss'

class UnassignedPlants extends Component {

  drop = event => {
    event.preventDefault();
    const plant = JSON.parse(event.dataTransfer.getData("plant"))
    plant.spaceId = null
    this.props.editPlant(plant)
  }

  dragOver = event => {
    event.preventDefault();
  }

  render() {
    let plants = this.props.plants.filter(plant => plant.attributes.spaceId == null)
    return (
      <div className="content left" onDrop={this.drop} onDragOver={this.dragOver}>
        <div className="centered">
          {plants.map(plant => <PlantCard plant={plant.attributes} key={plant.id} />)}
        </div>
      </div>
    )
  }
}

const mstp = state => {
  return {
    plants: state.plants.data
  }
}

const mdtp = dispatch => {
  return {
    editPlant: plant => dispatch(editPlant(plant))
  }
}

export default connect(mstp, mdtp)(UnassignedPlants)