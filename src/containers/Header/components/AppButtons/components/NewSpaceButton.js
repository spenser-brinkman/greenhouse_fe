import React, { Component } from 'react';
import { connect } from 'react-redux'
import greenDoor from '../images/green-door.png'
import orangeDoor from '../images/orange-door.png'
import { openNewSpace, closeDropdown } from '../../../../../services/actions/headerActions'

class NewSpaceButton extends Component {

  toggleShowSpaceForm = () => {
    this.props.showSpaceForm ? this.props.closeNewSpace() : this.props.openNewSpace()
  }

  render(){
    return (
      <button id="door-button">
        <image
          tabIndex="0"
          type="image"
          onClick={this.toggleShowSpaceForm}
          id="door-icon"
          className={this.props.doorColor === 'green' ? 'green-door' : 'orange-door'}
        />
      </button>
    )
  }
}

const mstp = state => {
  return {
    doorColor: state.header.doorColor,
    showSpaceForm: state.header.showSpaceForm
  }
}

const mdtp = dispatch => {
  return {
    openNewSpace: () => dispatch(openNewSpace),
    closeNewSpace: () => dispatch(closeDropdown)
  }
}

export default connect(mstp, mdtp)(NewSpaceButton)