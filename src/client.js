import React from 'react';
import { match } from 'react-router';
import Root from './containers/Root';
import * as routes from './routes';

const { pathname, search, hash } = window.location;

match({
    routes: routes.default,
    location: `${pathname}${search}${hash}`
}, Root);
