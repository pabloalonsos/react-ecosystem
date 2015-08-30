import Immutable from 'immutable';
import { combineReducers } from 'redux';
import {
    ADD_TODO,
    COMPLETE_TODO,
    SET_VISIBILITY_FILTER,
} from '../actions';
import visibilityFilter from './visibility_filter';

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
            ...state,
            {
                text: action.text,
                completed: false
            }
        ];
        case COMPLETE_TODO:
            return state.map((todo, index) => {
                return index === action.index ?
                    { text: todo.text, completed: !todo.completed } :
                    todo;
            });
        default:
            return state;
    }
}

const Reducers = combineReducers({
    visibilityFilter,
    todos
});

export default Reducers;
