import { push } from 'connected-react-router';

import {  } from '../modules/';
import {  } from '../modules/';
import {  } from '../modules/';
import {  } from '../modules/';
import {  } from '../modules/';

export default store => next => action => {
  
    if (action.type === '@@router/LOCATION_CHANGE') {
        store.dispatch('...');
    }

    next(action);
};