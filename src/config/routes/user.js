import AboutUs from '../../pages/about-us';
import ContactUs from '../../pages/contact-us';
import Jogs from '../../pages/jogs';
import AddJog from '../../pages/add-jog';

const routes =  [
    { path: "/jogs", exact: true, component: Jogs },
    { path: "/add-jog", exact: true, component: AddJog },
    { path: "/about-us", exact: true, component: AboutUs },
    { path: "/contact-us", exact: true, component: ContactUs },
];

export default routes;