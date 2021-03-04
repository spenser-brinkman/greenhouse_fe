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
        data: [...state.data, action.payload]
      }
      
    case "EDIT_PLANT":
      idx = state.data.findIndex(plant => plant.id === action.payload.id)
      return {
        ...state,
        data: [
          ...state.data.slice(0, idx),
          action.payload,
          ...state.data.slice(idx + 1)
        ]
      }

    case "DELETE_PLANT":
      idx = state.data.findIndex(plant => plant.attributes.id === action.payload.id)
      return {
        ...state,
        data: [
          ...state.data.slice(0, idx),
          ...state.data.slice(idx + 1)
        ]
      }

    default:
      return state
      
  }
}

export default plantsReducer