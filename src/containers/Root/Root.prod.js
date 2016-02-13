import React from 'react';
import Immutable from 'immutable';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import * as routes from '../../routes';

const store = configureStore(
    browserHistory,
    Immutable.fromJS(window.__initialState));

export default () => {
    render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes.default} />
        </Provider>,
        document.getElementById('root')
    );
};
