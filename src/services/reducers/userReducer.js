function userReducer(state = {username: '', id: '', jwt: ''}, action) {

  switch (action.type) {

    case "LOGIN":
      return {
        username: action.payload.user.data.attributes.username,
        id: action.payload.user.data.attributes.id,
        jwt: action.payload.jwt
      }

    default:
      return state
      
  }
}

export default userReducer