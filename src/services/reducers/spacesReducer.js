function spacesReducer(state = { data: [], loading: false }, action) {

  let idx;

  switch (action.type) {

    case "LOADING_SPACES":
      return {
        ...state,
        data: [...state.data],
        loading: true
      }

    case "FETCH_SPACES":
      return {
        ...state,
        data: action.payload.data,
        loading: false
      }

    case "CREATE_SPACE":
      return {
        ...state,
        data: [...state.data, action.payload.space]
      }
      
    case "EDIT_SPACE":
      return {

      }

    case "DELETE_SPACE":
      idx = state.findIndex(space => space.id === action.id)
      return {

      }

    default:
      return state

  }
}

export default spacesReducer