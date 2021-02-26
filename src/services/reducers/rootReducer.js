import { combineReducers } from 'redux';

import plantsReducer from './plantsReducer';
import spacesReducer from './spacesReducer';
import headerReducer from './headerReducer';

const rootReducer = combineReducers({
  plants: plantsReducer,
  spaces: spacesReducer,
  header: headerReducer
});

export default rootReducer;