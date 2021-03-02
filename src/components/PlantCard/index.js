import React, { Component } from 'react';
import { connect } from 'react-redux'

import PlantInfo from './components/PlantInfo'

import './styles.scss'

class PlantCard extends Component {
  
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    let plant = this.props.plant
    return (
      <div className="plant-card">
        <div className="holder card-content">
          <ul className="plant">
            <p onClick={this.handleClick}>{this.props.plant.species}</p>
            {this.state.open && <PlantInfo plant={plant} />}
          </ul>
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