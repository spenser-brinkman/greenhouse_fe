import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles.scss'

class Logo extends Component {
  render(){
    return (
      <div id="logo-container">
        <Link to="/">
          <h1 id="logo">Green<span>House</span></h1>
        </Link>
      </div>
    )
  }
}

export default Logo