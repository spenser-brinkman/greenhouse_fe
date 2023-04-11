// const signupURL = 'http://localhost:3001/signup'
// const loginURL = 'http://localhost:3001/login'
// const autoLoginURL = 'http://localhost:3001/auto-login'

// const signupURL = 'https://www.spenserbrinkman.com/greenhouse/api/signup'
// const loginURL = 'https://www.spenserbrinkman.com/greenhouse/api/login'
// const autoLoginURL = 'https://www.spenserbrinkman.com/greenhouse/api/auto-login'

const signupURL = (process.env.NODE_ENV === 'production' ? 'https://www.spenserbrinkman.com/greenhouse/api/signup' : 'http://localhost:3001/signup')
const loginURL = (process.env.NODE_ENV === 'production' ? 'https://www.spenserbrinkman.com/greenhouse/api/login' : 'http://localhost:3001/login')
const autoLoginURL = (process.env.NODE_ENV === 'production' ? 'https://www.spenserbrinkman.com/greenhouse/api/auto-login' : 'http://localhost:3001/auto-login')

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
        dispatch({type: 'LOGIN', payload: json.user.data.attributes})
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
    dispatch({type: 'CLEAR_SPACES'})
    dispatch({type: 'CLEAR_PLANTS'})
  }
}

export { signup, login, fetchLoggedInUser, logout }
