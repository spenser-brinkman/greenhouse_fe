import { combineReducers } from 'redux';

import plantsReducer from './plantsReducer';
import spacesReducer from './spacesReducer';
import headerReducer from './headerReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  plants: plantsReducer,
  spaces: spacesReducer,
  header: headerReducer
});

export default rootReducer;