function spacesReducer(state = { data: [], loading: false }, action) {

  let idx;

  switch (action.type) {

    case 'LOADING_SPACES':
      return {
        ...state,
        data: [...state.data],
        loading: true
      }

    case 'FETCH_SPACES':
      return {
        ...state,
        data: action.payload.data,
        loading: false
      }

    case 'CREATE_SPACE':
      return {
        ...state,
        data: [...state.data, action.payload]
      }
      
    case 'EDIT_SPACE':
      idx = state.data.findIndex(space => space.id === action.payload.id)
      return {
        ...state,
        data: [
          ...state.data.slice(0, idx),
          action.payload,
          ...state.data.slice(idx + 1)
        ]
      }

    case 'DELETE_SPACE':
      idx = state.data.findIndex(space => space.attributes.id === action.payload.id)
      return {
        ...state,
        data: [
          ...state.data.slice(0, idx),
          ...state.data.slice(idx + 1)
        ]
      }

    case 'CLEAR_SPACES':
      return {
        data: [],
        loading: false
      }

    default:
      return state

  }
}

export default spacesReducer