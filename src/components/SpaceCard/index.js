import React, { Component } from 'react';
import { connect } from 'react-redux'

import { editPlant } from '../../services/actions/plantActions'

import PlantInfo from '../PlantCard/components/PlantInfo'

import './styles.scss'

class SpaceCard extends Component {

  drop = event => {
    event.preventDefault();
    const plant = JSON.parse(event.dataTransfer.getData("plant"))
    plant.spaceId = this.props.space.id
    this.props.editPlant(plant)
  }

  dragOver = event => {
    event.preventDefault();
  }

  render() {
    let space = this.props.space
    return (
      <div className="space-card" onDrop={this.drop} onDragOver={this.dragOver}>
        <div className="holder card-content">
          <h2 className="card-title">{this.props.space.name}</h2>
          <p>
            Light: <span style={{fontWeight: 600}}>{space.light}</span>
            &nbsp;| Humidity: <span style={{fontWeight: 600}}>{space.humidity}</span>
          </p>
          <div>
            {this.props.plants.map(plant => plant.attributes.spaceId === space.id && <PlantInfo key={plant.attributes.id} plant={plant.attributes} />)}
          </div>
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

export default connect(mstp, mdtp)(SpaceCard)