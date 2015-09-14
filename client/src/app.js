import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter, routerStateReducer } from 'redux-react-router';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { createHistory } from 'history';

import routes from './routes';
import reducers from './reducers';

const combinedReducers = combineReducers({
    router: routerStateReducer,
    ...reducers
});

const devCreateStore = compose(
    reduxReactRouter({
        routes,
        createHistory
    }),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = devCreateStore(combinedReducers);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <ReduxRouter />
        </Provider>
        <DebugPanel
            top={true}
            right={true}
            bottom={true}>
            <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
    </div>,
    document.getElementById('root')
);

