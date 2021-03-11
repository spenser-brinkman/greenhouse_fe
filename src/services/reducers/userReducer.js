function userReducer(
  state = {
    loggedIn: false,
    username: '',
    id: '',
    jwt: ''
  }, action) {

  switch (action.type) {

    case 'LOGIN':
      return {
        loggedIn: true,
        username: action.payload.username,
        id: action.payload.id,
        jwt: action.payload.jwt
      }

    case 'LOGOUT':
      return {
        loggedIn: false,
        username: '',
        id: '',
        jwt: ''
      }

    default:
      return state
      
  }
}

export default userReducer