const baseURL = "http://localhost:3001/spaces/"

const fetchSpaces = () => {
  return (dispatch) => {
    dispatch({type: "LOADING_SPACES"})
    fetch(baseURL)
    .then(response => response.json())
    .then(JSON => dispatch({type: "FETCH_SPACES", payload: {data: JSON}}))
  }
}

const createSpace = (body) => {
  return (dispatch) => {
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        space: body
      })
    })
    .then(json => dispatch({type: "CREATE_SPACE", payload: json}))
  }
}


const editSpace = ({id, name, humidity, light}) => {
  return (dispatch) => {
    fetch(baseURL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        space: {
          name,
          humidity,
          light
        }
      })
    })
    .then(json => dispatch({type: "EDIT_SPACE", payload: json}))
  }
}

const deleteSpace = ({id}) => {
  return (dispatch) => {
    fetch(baseURL + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(json => dispatch({type: "DELETE_SPACE", payload: json}))
  }
}

export { fetchSpaces, createSpace, editSpace, deleteSpace }
