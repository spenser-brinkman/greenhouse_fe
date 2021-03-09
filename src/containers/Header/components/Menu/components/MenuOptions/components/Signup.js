import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import { signup } from '../../../../../../../services/actions/userActions'

class Signup extends Component {

  state = {
    username: '',
    password: '',
    passwordConfirmation: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signup(this.state)
  }

  render(){
    return (
      <>
        <form className="dropdown-form" onSubmit={this.handleSubmit}>

          <h3>Username:</h3>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

          <h3>Password:</h3>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />

          <h3>Confirm Password:</h3>
          <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} />

          <input type="submit" value="Sign Up" />
        </form>

        <NavLink to="/menu" />
      </>
    )
  }
}

const mstp = state => {
  return {

  }
}

const mdtp = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  }
}

export default connect(null, mdtp)(Signup)