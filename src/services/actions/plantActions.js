const baseURL = "http://localhost:3001/plants/"

const fetchPlants = () => {
  return dispatch => {
    dispatch({type: "LOADING_PLANTS"})
    fetch(baseURL)
    .then(response => response.json())
    .then(JSON => dispatch({type: "FETCH_PLANTS", payload: {data: JSON.data}}))
  }
}

const createPlant = body => {
  return dispatch => {
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        plant: body
      })
    })
    .then(resp => resp.json())
    // .then(fetchPlants)
    // .then(json => dispatch({type: "CREATE_PLANT", payload: body}))
  }
}


const editPlant = ({id, name, humidity, light}) => {
  return dispatch => {
    fetch(baseURL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        plant: {
          name,
          humidity,
          light
        }
      })
    })
    .then(json => dispatch({type: "EDIT_PLANT", payload: json}))
  }
}

const deletePlant = ({id}) => {
  return dispatch => {
    fetch(baseURL + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(json => dispatch({type: "DELETE_PLANT", payload: json}))
  }
}

export { fetchPlants, createPlant, editPlant, deletePlant }
