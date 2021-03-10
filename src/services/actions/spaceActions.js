const baseURL = (process.env.NODE_ENV === 'production' ? 'https://greenhouse-rb.herokuapp.com/spaces' : 'http://localhost:3001/spaces')

const fetchSpaces = () => {
  return dispatch => {
    dispatch({type: 'LOADING_SPACES'})
    const token = localStorage.token
    if (token) {
      fetch(baseURL, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(json => dispatch({type: 'FETCH_SPACES', payload: {data: json.data}}))
    }
  }
}

const createSpace = body => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          space: body
        })
      })
      .then(resp => resp.json())
      .then(json => dispatch({type: 'CREATE_SPACE', payload: json.data}))
    }
  }
}


const editSpace = ({id, name, humidity, light}) => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      fetch(baseURL + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          space: {
            name,
            humidity,
            light
          }
        })
      })
      .then(resp => resp.json())
      .then(json => dispatch({type: 'EDIT_SPACE', payload: json.data}))
    }
  }
}

const deleteSpace = (id, plants = []) => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      fetch(baseURL + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(() => {
        plants.map(plant => dispatch({type: 'EDIT_PLANT', payload: plant}))
        dispatch({type: 'DELETE_SPACE', payload: {id}})
      })
    }
  }
}

export { fetchSpaces, createSpace, editSpace, deleteSpace }
