import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

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
