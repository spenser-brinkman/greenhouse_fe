import React, { Component } from 'react';
import { connect } from 'react-redux'

import PlantInfo from '../PlantCard/components/PlantInfo'

import './styles.scss'

class SpaceCard extends Component {

  render() {
    let space = this.props.space
    return (
      <div className="space-card">
        <div className="holder card-content">
          <h2 className="card-title">{this.props.space.name}</h2>
          <p>
            Light: <span style={{fontWeight: 600}}>{space.light}</span>
            &nbsp;| Humidity: <span style={{fontWeight: 600}}>{space.humidity}</span>
          </p>
          <div>
            {this.props.plants.map(plant => plant.attributes.spaceId === space.id && <PlantInfo plant={plant.attributes} />)}
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

  }
}

export default connect(mstp, mdtp)(SpaceCard)