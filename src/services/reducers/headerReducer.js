function headerReducer(
  state = {
    leafColor: 'green',
    doorColor: 'green',
    burgerColor: 'green',
    showPlantForm: false,
    showSpaceForm: false,
    showMenu: false
  }, action) {

  switch (action.type) {

    case 'OPEN_NEW_PLANT':
      return {
        leafColor: 'orange',
        doorColor: 'green',
        burgerColor: 'green',
        showPlantForm: true,
        showSpaceForm: false,
        showMenu: false
      }

    case 'OPEN_NEW_SPACE':
      return {
        leafColor: 'green',
        doorColor: 'orange',
        burgerColor: 'green',
        showPlantForm: false,
        showSpaceForm: true,
        showMenu: false
      }

    case 'OPEN_MENU':
      return {
        leafColor: 'green',
        doorColor: 'green',
        burgerColor: 'orange',
        showPlantForm: false,
        showSpaceForm: false,
        showMenu: true
      }

    case 'CLOSE_DROPDOWN':
      return {
        leafColor: 'green',
        doorColor: 'green',
        burgerColor: 'green',
        showPlantForm: false,
        showSpaceForm: false,
        showMenu: false
      }
                              
    default:
      return state
      
  }
}

export default headerReducer