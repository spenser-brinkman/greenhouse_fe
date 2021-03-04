const baseURL = (process.env.NODE_ENV === 'production' ? "https://greenhouse-rb.herokuapp.com/plants/" : "http://localhost:3001/plants/")

const fetchPlants = () => {
  return dispatch => {
    dispatch({type: "LOADING_PLANTS"})
    fetch(baseURL)
    .then(response => response.json())
    .then(json => dispatch({type: "FETCH_PLANTS", payload: {data: json.data}}))
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
    .then(json => dispatch({type: "CREATE_PLANT", payload: json.data}))
  }
}


const editPlant = ({id, species, lightReq, humidityReq, waterFreq, lastWater, lastFert, comments, spaceId}) => {
  return dispatch => {
    fetch(baseURL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        plant: {
          species,
          lightReq,
          humidityReq,
          waterFreq,
          lastWater,
          lastFert,
          comments,
          spaceId
        }
      })
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: "EDIT_PLANT", payload: json.data}))
  }
}

const deletePlant = id => {
  return dispatch => {
    fetch(baseURL + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(() => dispatch({type: "DELETE_PLANT", payload: {id}}))
  }
}

export { fetchPlants, createPlant, editPlant, deletePlant }
