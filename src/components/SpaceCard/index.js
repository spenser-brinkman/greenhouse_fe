import React, { Component } from 'react';
import { connect } from 'react-redux'

import { editSpace, deleteSpace } from '../../services/actions/spaceActions'
import { editPlant } from '../../services/actions/plantActions'

import PlantInfo from '../PlantCard/components/PlantInfo'

import './styles.scss'

class SpaceCard extends Component {

  space = this.props.space

  plants = this.props.plants.filter(plant => plant.attributes.spaceId === this.props.space.id)

  state = {
    spaceOpen: false,
    spaceEditorOpen: false,
    spaceEditFields: {
      id: this.props.space.id,
      name: this.props.space.name,
      light: this.props.space.light,
      humidity: this.props.space.humidity
    }
  }

  drop = event => {
    event.preventDefault();
    const plant = JSON.parse(event.dataTransfer.getData("plant"))
    plant.spaceId = this.space.id
    this.props.editPlant(plant)
  }

  dragOver = event => {
    event.preventDefault();
  }

  toggleDetails = () => {
    this.setState({
      spaceOpen: !this.state.spaceOpen,
      spaceEditorOpen: false
    })
  }

  toggleEditForm = () => {
    this.setState({
      spaceEditorOpen: !this.state.spaceEditorOpen
    })
  }
  
  spaceDetails = () => {
    return (
      <>
        <p>
          Light: <span style={{fontWeight: 600}}>{this.space.light}</span>
          &nbsp;| Humidity: <span style={{fontWeight: 600}}>{this.space.humidity}</span>
        </p>
        <button onClick={this.toggleEditForm}>Edit Space</button>
      </>
    )
  }

  handleFieldChange = event => {
    this.setState({
      spaceEditFields: {...this.state.spaceEditFields, [event.target.name]: event.target.value}
    })
  }

  submitEditSpace = event => {
    event.preventDefault();
    this.props.editSpace(this.state.spaceEditFields);
    this.toggleEditForm()
  }

  deleteSpace = event => {
    event.preventDefault();
    this.plants.map(plant => plant.attributes.spaceId = null && this.props.editPlant(plant))
    this.props.deleteSpace(this.space.id, this.plants)
  }

  editSpaceForm = () => {
    return (
      <form onSubmit={this.submitEditSpace}>
        <li>Light: <input type="text" name="light" value={this.state.spaceEditFields.light} onChange={this.handleFieldChange} /></li>
        <li>Humidity: <input type="text" name="humidity" value={this.state.spaceEditFields.humidity} onChange={this.handleFieldChange} /></li>
        <li>
          <input type="submit" value="Submit" />
          <button onClick={this.deleteSpace}>Delete</button>
          <button onClick={this.toggleEditForm}>Cancel</button>
        </li>
      </form>
    )
  }

  render() {
    let plants = this.props.plants.filter(plant => plant.attributes.spaceId === this.props.space.id)
    return (
      <div className="space-card" onDrop={this.drop} onDragOver={this.dragOver}>
        <div className="holder card-content">
          <h2 className={this.state.spaceOpen ? "open card-title" : "closed card-title"} onClick={this.toggleDetails}>{this.space.name}</h2>
          {this.state.spaceOpen && this.spaceDetails()}
          {this.state.spaceEditorOpen && this.editSpaceForm()}
          <div>
            {plants.map(plant => <PlantInfo key={plant.attributes.id} plant={plant.attributes} />)}
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
    editPlant: plant => dispatch(editPlant(plant)),
    editSpace: space => dispatch(editSpace(space)),
    deleteSpace: (id, plants) => dispatch(deleteSpace(id, plants))
  }
}

export default connect(mstp, mdtp)(SpaceCard)