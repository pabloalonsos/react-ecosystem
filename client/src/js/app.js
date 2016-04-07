import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter, routerStateReducer } from 'redux-react-router';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { createHistory } from 'history';

import { Route, IndexRoute, Redirect } from 'react-router';
import { Main, Dashboard, Settings } from './containers';


import '../assets/style.scss';
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
    devTools()
    // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);


const store = devCreateStore(combinedReducers);

class Root extends React.Component {
    render() {
        debugger;
        return (
            <div>
                <Provider store={store}>
                    <ReduxRouter>
                        <Route path="/" component={Main}>
                            <IndexRoute component={Dashboard} />
                            <Route path="settings" component={Settings} />
                            <Redirect from="*" to="/" />
                        </Route>
                    </ReduxRouter>
                </Provider>
                <DebugPanel
                    top={true}
                    right={true}
                    bottom={true}>
                    <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));