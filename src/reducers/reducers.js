import { combineReducers } from 'redux';

import visibilityFilter from './visibility_filter';
import todos from './todos';

const Reducers = combineReducers({
    visibilityFilter,
    todos
});

export default Reducers;
