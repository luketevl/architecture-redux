import { combineReducers } from 'redux';

import tweets from './twweetsReducer';
import user from './userReducer';

export default combineReducers({
  tweets,
  user
});
