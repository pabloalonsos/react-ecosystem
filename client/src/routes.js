import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import { Main, Dashboard, Settings } from './containers';

const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Dashboard} />
        <Route path="settings" component={Settings} />
        <Redirect from="*" to="/" />
    </Route>
);

export default routes;
