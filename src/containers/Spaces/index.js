import React, { Component } from 'react';
import { connect } from 'react-redux'

import SpaceCard from '../../components/SpaceCard/'

import './styles.scss'

class Spaces extends Component {

  render() {
    return (
      <div className="content right">
        <div className="centered">
          {this.props.spaces.map(space => <SpaceCard space={space.attributes} key={space.id} />)}
        </div>
      </div>
    )
  }
}

const mstp = state => {
  return {
    spaces: state.spaces.data
  }
}

export default connect(mstp)(Spaces)