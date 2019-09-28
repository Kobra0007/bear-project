import AboutUs from '../../pages/about-us';
import ContactUs from '../../pages/contact-us';
import Jogs from '../../pages/jogs';
import AddJog from '../../pages/add-jog';
import EditJog from '../../pages/edit-jog';

const routes =  [
    { path: "/jogs", exact: true, component: Jogs },
    { path: "/add-jog", exact: true, component: AddJog },
    { path: "/edit-jog", exact: true, component: EditJog },
    { path: "/about-us", exact: true, component: AboutUs },
    { path: "/contact-us", exact: true, component: ContactUs },
];

export default routes;