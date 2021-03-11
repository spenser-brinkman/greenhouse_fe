import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './containers/Header/'
import UnassignedPlants from './containers/UnassignedPlants/'
import Spaces from './containers/Spaces/'
import { fetchLoggedInUser } from './services/actions/userActions';
import { fetchSpaces } from './services/actions/spaceActions'
import { fetchPlants } from './services/actions/plantActions'

import './styles.scss'

class App extends Component {

  componentDidMount(){
    this.props.fetchLoggedInUser()
    this.fetchEverything()
  }

  componentDidUpdate(){
    this.fetchEverything()
  }

  fetchEverything = () => {
    this.props.fetchSpaces()
    this.props.fetchPlants()
  }

  render() {
    return (
      <>
        <Header />
        <UnassignedPlants />
        <div id="vertical-line" />
        <Spaces />
      </>
    )
  }
}

const mstp = state => {
  return {
    user: state.user
  }
}

const mdtp = dispatch => {
  return {
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser()),
    fetchSpaces: () => dispatch(fetchSpaces()),
    fetchPlants: () => dispatch(fetchPlants())
  }
}

export default connect(mstp, mdtp)(App);
