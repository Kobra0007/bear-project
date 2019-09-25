import { matchPath } from 'react-router-dom';

import noAuth from './no-auth';
import user from './user';

const routes = [].concat( noAuth, user );

export default routes;