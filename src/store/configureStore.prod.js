import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composedCreateStore = compose(
    applyMiddleware(thunk, syncHistory(browserHistory))
)(createStore);

export default function configureStore(initialState) {
  return composedCreateStore(rootReducer, initialState);
}
