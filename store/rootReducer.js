import { combineReducers } from 'redux';

import farmReducer from './farm/farm.reducer';

export default combineReducers({
	farm: farmReducer
});
