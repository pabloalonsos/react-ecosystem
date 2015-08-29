import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './containers/main-container';
import Reducers from './reducers';

let store = createStore(Reducers);

React.render(
    <Provider store={store}>
        {() => <Main />}
    </Provider>,
    document.getElementById('root')
)
