import React from 'react';
import { Redirect } from 'react-router';

import Homepage from '../../pages/main';

const redirectIfLogIn = (loggedIn) => !loggedIn ? false : <Redirect to={'/jogs'}/>;

const routes =  [
	{ path: "/", exact: true, component: Homepage, onEnter: redirectIfLogIn  },
];

export default routes;