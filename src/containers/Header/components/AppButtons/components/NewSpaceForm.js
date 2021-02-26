import React, { Component } from 'react';
import { connect } from 'react-redux'

import { closeDropdown } from '../../../../../services/actions/headerActions'

class NewSpaceForm extends Component {
  render(){
    return (
      <div className={this.props.showSpaceForm ? "menu" : "menu hidden"} >
        <form onSubmit={this.props.closeNewSpace} id="new-space-form" className="dropdown-form">
          <h2>New Space</h2>
            <br />
            <label>
              <h3>Name:</h3>
              <input type="text" name="name" value="" />
            </label>
            
            <label>
              <h3>Humidity Level:</h3>
              <input type="text" name="humidity" value="" />
            </label>
            
            <label>
              <h3>Light Level:</h3>
              <input type="text" name="light" value="" />
            </label>

            <label>
              <input type="submit" value="Create" />
            </label>
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
    closeNewSpace: () => dispatch(closeDropdown)
  }
}

export default connect(mstp, mdtp)(NewSpaceForm)