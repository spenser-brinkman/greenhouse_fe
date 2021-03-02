import React, { Component } from 'react';

import './styles.scss'

class SpaceCard extends Component {

  render() {
    let space = this.props.space
    return (
      <div className="space-card">
        <div className="holder card-content">
          <h2>{this.props.space.name}</h2>
          <p>
            Light: <span style={{fontWeight: 600}}>4</span>
            | Humidity: <span style={{fontWeight: 600}}>4</span>
          </p>
        </div>
      </div>
    )
  }
}

export default SpaceCard