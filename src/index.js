import 'babel-polyfill';

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MobileDetect from 'mobile-detect';
import { createBrowserHistory as createHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import {AppContainer} from 'react-hot-loader';

import TagManager from 'react-gtm-module';

import createStore from './redux/create-store';

import App from './app';
import classes from './styles.css';

export const history = createHistory();

const store = createStore(history);

const $root = window.document.getElementById('root');

function renderApp(Component) {
    const mobileDetect = new MobileDetect(window.navigator.userAgent);

    hydrate(
        <div className='appWrapper'>
                <Provider store={store} key='provider'>
                    <ConnectedRouter history={history}>
                        <Component 
                            mobileDetect={mobileDetect}
                        />
                    </ConnectedRouter>
                </Provider>
        </div>,
        $root
    )
}
renderApp(App);