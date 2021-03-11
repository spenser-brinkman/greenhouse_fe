import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { closeDropdown } from '../../../../../../../services/actions/headerActions'

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
    this.props.history.push("/")
    this.props.closeMenu()
  }

  render(){
    return (
      <>
        <form className="dropdown-form" onSubmit={this.handleSubmit}>

          <h3>Username:</h3>
          <input required type="text" name="username" value={this.state.username} onChange={this.handleChange} />

          <h3>Password:</h3>
          <input required type="password" name="password" value={this.state.password} onChange={this.handleChange} />

          <input type="submit" value="Log In" />

          <Link to="/menu">
            <input type="submit" value="Go Back" />
          </Link>
        </form>
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
    login: user => dispatch(login(user)),
    closeMenu: () => dispatch(closeDropdown)
  }
}

export default connect(null, mdtp)(Login)