import express from 'express';
import http from 'http';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import createHistory from 'history/lib/createMemoryHistory';
import Immutable from 'immutable';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import * as routes from './routes';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';

const app = express();
const port = process.env.PORT || 3003;

const getMarkup = (store, props) => {
    const initialState = JSON.stringify(store.getState());
    const markup = renderToString(
        <Provider store={store}>
            <RouterContext {...props} />
        </Provider>
    );
    const scripts = renderToString(process.env.NODE_ENV === 'development' ? (
        <script src="/static/bundle.js"></script>
    ) : (
        <div>
            <script src="vendor.js"></script>
            <script src="bundle.js"></script>
        </div>
    ));
    return (
        `<!DOCTYPE html>
        <html>
            <head>
                <title>My App</title>
            </head>
            <body>
                <div id="root">${markup}</div>
                <script>window.__initialState = ${initialState};</script>
                ${scripts}
            </body>
        </html>
        `
    );
};

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);
    app.use(express.static('dist'));
    app.use(webpackDevMiddleware(compiler, {
        onInfo: true,
        publicPath: webpackConfig.output.publicPath,
        colors: true
    }));
    app.use(webpackHotMiddleware(compiler))
} else {
    app.use(express.static(__dirname));
}

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    match(
        { routes: routes.default, location: req.url },
        (err, redirectLocation, props) => {
            if (err) {
                res.status(500).send(err.message);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (props) {
                const store = configureStore(createHistory());
                res.status(200).send(getMarkup(store, props));
            } else {
                res.sendStatus(404);
            }
        }
    );
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on ${port}`));
