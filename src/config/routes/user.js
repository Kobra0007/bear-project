import React from 'react';
import { Redirect } from 'react-router';
import AboutUs from '../../pages/about-us';
import ContactUs from '../../pages/contact-us';
import Jogs from '../../pages/jogs';
import AddJog from '../../pages/add-jog';
import EditJog from '../../pages/edit-jog';

const redirectIfLogIn = (loggedIn) => loggedIn ? false : <Redirect to={'/'}/>;

const routes =  [
    { path: "/jogs", exact: true, component: Jogs, onEnter: redirectIfLogIn },
    { path: "/add-jog", exact: true, component: AddJog, onEnter: redirectIfLogIn },
    { path: "/edit-jog", exact: true, component: EditJog, onEnter: redirectIfLogIn },
    { path: "/about-us", exact: true, component: AboutUs, onEnter: redirectIfLogIn },
    { path: "/contact-us", exact: true, component: ContactUs, onEnter: redirectIfLogIn },
];

export default routes;