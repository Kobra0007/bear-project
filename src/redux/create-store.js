//Save and load Redux state to and from LocalStorage.
import persistState from 'redux-localstorage';

// for dispatching history actions
import { routerMiddleware } from 'connected-react-router';

//for creating an intermediate layer
import createSagaMiddleware from 'redux-saga';

//for creating store and apply middleware
import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';


import { LOCALSTORAGE_PATH } from '../config/constants';

import reducer from './modules';
import SagaManager from './saga-manager';

//import customMiddleware from './middleware/custom'; 



function getEnhancer(middlewares) {
    
    let composeEnhancers = compose;

    if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }

    return composeEnhancers (
        applyMiddleware(...middlewares),
        persistState(['user', 'jogs'], {
            key: LOCALSTORAGE_PATH
        })
    );
}



export default function createStore(history, initialState = {}) {
    const sagaMiddleware = createSagaMiddleware({
		onError: (e) => {
			// Just a stub for the moment
			console.error(e, 'saga middleware error')
			throw e;
		}
	});
    
    const reduxRouterMiddleware = routerMiddleware(history);
    
	const middlewares = [ reduxRouterMiddleware, sagaMiddleware];

	if (process.env.NODE_ENV === 'development') {

        const { logger } = require('redux-logger');

		middlewares.push(logger);
	}

	const store = reduxCreateStore(
		reducer(history),
		initialState,
		getEnhancer(middlewares)
	);

    SagaManager.start(sagaMiddleware);

    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('./modules', () => store.replaceReducer(reducer));
        
        module.hot.accept('./saga-manager', () => {
            SagaManager.cancel(store);
            SagaManager.start(sagaMiddleware);
            
            store.replaceReducer(reducer);
        })
    }
    
    return store;
}