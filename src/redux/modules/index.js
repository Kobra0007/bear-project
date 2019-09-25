import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';




export default (history, routerState = {}) => combineReducers({
	router: connectRouter(history),
	user,
});