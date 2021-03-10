const signupURL = (process.env.NODE_ENV === 'production' ? 'https://greenhouse-rb.herokuapp.com/signup' : 'http://localhost:3001/signup')
const loginURL = (process.env.NODE_ENV === 'production' ? 'https://greenhouse-rb.herokuapp.com/login' : 'http://localhost:3001/login')
const autoLoginURL = (process.env.NODE_ENV === 'production' ? 'https://greenhouse-rb.herokuapp.com/auto-login' : 'http://localhost:3001/auto-login')

const signup = user => {
  return dispatch => {
    fetch(signupURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: user})
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.error){
        alert(json.error)
      } else {
        localStorage.setItem('token', json.jwt)
        dispatch({type: 'LOGIN', payload: json})
      }
    })
  }
}

const login = user => {
  return dispatch => {
    fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        user: user
      })
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.error){
        alert(json.error)
      } else {
        localStorage.setItem('token', json.jwt)
        dispatch({type: 'LOGIN', payload: json})
      }
    })
  }
}

const fetchLoggedInUser = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      fetch(autoLoginURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(json => {
        if (json.error) {
          alert(json.error)
          localStorage.removeItem('token')
        } else {
          dispatch({type: 'LOGIN', payload: json})
        }
      })
    }
  }
}

const logout = () => {
  return dispatch => {
    localStorage.removeItem('token')
    dispatch({type: 'LOGOUT'})
  }
}

export { signup, login, fetchLoggedInUser, logout }
