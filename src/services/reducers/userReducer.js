function userReducer(state = {loggedIn: false, username: '', id: '', jwt: ''}, action) {

  switch (action.type) {

    case 'LOGIN':
      return {
        loggedIn: true,
        username: action.payload.user.data.attributes.username,
        id: action.payload.user.data.attributes.id,
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