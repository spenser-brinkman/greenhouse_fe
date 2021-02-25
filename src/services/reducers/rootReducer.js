import { combineReducers } from 'redux';

import plantsReducer from './plantsReducer';
import spacesReducer from './spacesReducer';

const rootReducer = combineReducers({
  plants: plantsReducer,
  spaces: spacesReducer
});

export default rootReducer;