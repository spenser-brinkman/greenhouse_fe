import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import SpaceCard from '../../components/SpaceCard/'

import './styles.scss'

class Spaces extends Component {

  render() {
    return (
      <div className="content right">
        <div className="centered">
          {!this.props.user.loggedIn
          ? <Link class="loginPrompt" to="/menu/login">You are not logged in!</Link>
          : this.props.spaces.map(space => <SpaceCard space={space.attributes} key={space.id} />)}
        </div>
      </div>
    )
  }
}

const mstp = state => {
  return {
    spaces: state.spaces.data,
    user: state.user
  }
}

export default connect(mstp)(Spaces)