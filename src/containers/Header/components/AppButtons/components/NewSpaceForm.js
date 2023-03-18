import React, { Component } from 'react';
import { connect } from 'react-redux'

import { closeDropdown } from '../../../../../services/actions/headerActions'
import { createSpace, fetchSpaces } from '../../../../../services/actions/spaceActions'

const defaultState = {
  name: '',
  light: '',
  humidity: '',
}

class NewSpaceForm extends Component {
  
  state = defaultState

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createSpace(this.state);
    this.props.fetchSpaces();
    this.setState(defaultState);
    this.props.closeDropdown();
  }

  render(){
    return (
      <div className={this.props.showSpaceForm ? "menu" : "menu hidden"} >
        <form onSubmit={this.handleSubmit} id="new-space-form" className="dropdown-form">

          <h2>New Space</h2>
          <br />

          <h3>Name:</h3>
          <input required type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        
          <h3>Light Level (1-5):</h3>
          <input required type="text" name="light" value={this.state.light} onChange={this.handleChange} />
        
          <h3>Humidity Level (1-5):</h3>
          <input required type="text" name="humidity" value={this.state.humidity} onChange={this.handleChange} />

          <input type="submit" value="Create" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

const mstp = state => {
  return {
    showSpaceForm: state.header.showSpaceForm
  }
}

const mdtp = dispatch => {
  return {
    closeDropdown: () => dispatch(closeDropdown),
    createSpace: body => dispatch(createSpace(body)),
    fetchSpaces: () => dispatch(fetchSpaces())
  }
}

export default connect(mstp, mdtp)(NewSpaceForm)