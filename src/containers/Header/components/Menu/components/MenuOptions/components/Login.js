import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import { login } from '../../../../../../../services/actions/userActions'

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.state)
  }

  render(){
    return (
      <>
        <form className="dropdown-form" onSubmit={this.handleSubmit}>

          <h3>Username:</h3>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

          <h3>Password:</h3>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />

          <input type="submit" value="Log In" />
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
    login: user => dispatch(login(user))
  }
}

export default connect(null, mdtp)(Login)