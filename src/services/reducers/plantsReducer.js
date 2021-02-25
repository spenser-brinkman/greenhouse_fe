function plantsReducer(state = { data: [], loading: false }, action) {

  let idx;

  switch (action.type) {

    case "LOADING_PLANTS":
      return {
        ...state,
        data: [...state.data],
        loading: true
      }

    case "FETCH_PLANTS":
      return {
        ...state,
        data: action.payload.data,
        loading: false
      }

    case "CREATE_PLANT":
      return {
        ...state,
        data: [...state.data, action.payload.plant]
      }
      
    case "EDIT_PLANT":
      return {

      }

    case "DELETE_PLANT":
      idx = state.findIndex(plant => plant.id === action.id)
      return {

      }

    default:
      return state
      
  }
}

export default plantsReducer