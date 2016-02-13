import Main from './containers/Main';
import User from './containers/User';
import About from './containers/About';

const routes = {
    path: '',
    component: Main,
    childRoutes: [
        {
            path: '/',
            component: User
        },
        {
            path: '/about',
            component: About
        }
    ]
};

export default routes;
