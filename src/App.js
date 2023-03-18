import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './containers/Header/'
import UnassignedPlants from './containers/UnassignedPlants/'
import Spaces from './containers/Spaces/'
import WelcomeMessage from './components/WelcomeMessage/'
import { fetchLoggedInUser } from './services/actions/userActions';
import { fetchSpaces } from './services/actions/spaceActions'
import { fetchPlants } from './services/actions/plantActions'

import './styles.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWelcomeMessage: false
    }
  }
  
  componentDidMount(){
    this.props.fetchLoggedInUser()
    this.fetchEverything()
    this.setState({ showWelcomeMessage: true });
  }

  componentDidUpdate(){
    this.fetchEverything()
  }

  fetchEverything = () => {
    this.props.fetchSpaces()
    this.props.fetchPlants()
  }

  handleDismissWelcomeMessage = () => {
    this.setState({ showWelcomeMessage: false })
  }

  render() {
    const { showWelcomeMessage } = this.state;
  
    if (showWelcomeMessage) {
      return <WelcomeMessage onDismiss={this.handleDismissWelcomeMessage} />;
    }
  
    return (
      <div>
        <Header />
        <UnassignedPlants />
        <div id="vertical-line" />
        <Spaces />
      </div>
    );
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
