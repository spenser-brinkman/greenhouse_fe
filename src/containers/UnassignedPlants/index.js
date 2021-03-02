import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchPlants } from '../../services/actions/plantActions'
import PlantCard from '../../components/PlantCard/'

import './styles.scss'

class UnassignedPlants extends Component {

  componentDidMount(){
    this.props.fetchPlants()
  }

  render() {
    let plants = this.props.plants.filter(plant => plant.attributes.spaceId == null)
    return (
      <div className="content left">
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
    fetchPlants: () => dispatch(fetchPlants())
  }
}

export default connect(mstp, mdtp)(UnassignedPlants)