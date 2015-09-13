import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import reducers from './reducers/reducers';

import Main from './containers/main';

const devCreateStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

let store = devCreateStore(reducers);

class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Main />
                </Provider>
                <DebugPanel top right bottom>
                    <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(Root),
    document.getElementById('root')
)

