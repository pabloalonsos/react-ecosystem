import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createHistory from 'history/lib/createMemoryHistory';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(history = browserHistory, initialState) {
    const reduxRouterMiddleware = syncHistory(history);
    const composedCreateStore = compose(
        applyMiddleware(thunk, reduxRouterMiddleware),
        applyMiddleware(createLogger()),
        DevTools.instrument()
    )(createStore);
    const store = composedCreateStore(rootReducer, initialState);

    reduxRouterMiddleware.listenForReplays(store);

    if (module.hot) {
        module.hot.accept('../reducers', () =>
                          store.replaceReducer(rootReducer.default));
    }

    return store;
}
