import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import jogs from './jogs';


export default (history, routerState = {}) => combineReducers({
	router: connectRouter(history),
	user,
	jogs
});