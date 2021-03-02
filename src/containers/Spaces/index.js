import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchSpaces } from '../../services/actions/spaceActions'
import SpaceCard from '../../components/SpaceCard/'

import './styles.scss'

class Spaces extends Component {

  componentDidMount(){
    this.props.fetchSpaces()
  }

  render() {
    
    console.log(this.props);
    console.log('*');
    console.log('*');
    console.log('*');
    console.log('*');
    return (
      <div className="right">
        {this.props.spaces.map(space => <SpaceCard space={space.attributes} key={space.id} />)}
      </div>
    )
  }
}

const mstp = state => {
  return {
    spaces: state.spaces.data
  }
}

const mdtp = dispatch => {
  return {
    fetchSpaces: () => dispatch(fetchSpaces())
  }
}

export default connect(mstp, mdtp)(Spaces)