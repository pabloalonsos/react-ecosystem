import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter, routerStateReducer } from 'redux-react-router';
import { createHistory } from 'history';

import '../assets/style.scss';
import routes from './routes';
import reducers from './reducers';

const combinedReducers = combineReducers({
    router: routerStateReducer,
    ...reducers
});

const routeStoreCreator = reduxReactRouter({
    routes,
    createHistory
})(createStore);

const store = routeStoreCreator(combinedReducers);

ReactDOM.render(
    <Provider store={store}>
        <ReduxRouter />
    </Provider>,
    document.getElementById('root')
);

