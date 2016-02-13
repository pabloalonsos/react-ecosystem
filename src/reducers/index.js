import { combineReducers } from 'redux';
import user from './user';
import { routeReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    user,
    routing: routeReducer
});

export default rootReducer;
