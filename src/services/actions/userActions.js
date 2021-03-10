const baseURL = (process.env.NODE_ENV === 'production' ? "https://greenhouse-rb.herokuapp.com/" : "http://localhost:3001/")

const signup = user => {
  return dispatch => {
    fetch(baseURL + 'users/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({user: user})
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.error){
        alert(json.error)
      } else {
        localStorage.setItem("token", json.jwt)
        dispatch({type: "LOGIN", payload: json})
      }
    })
  }
}

const login = user => {
  return dispatch => {
    fetch(baseURL + 'login/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: user
      })
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: "LOGIN", payload: json}))
  }
}

export { signup, login }
