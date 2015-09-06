import { List, fromJS } from 'immutable';
import {
    ADD_TODO,
    COMPLETE_TODO,
} from '../actions';

export default function todos(state = List(), action) {
    switch (action.type) {
        case ADD_TODO:
            return state.push(fromJS({
                text: action.text,
                completed: false
            }));
        case COMPLETE_TODO:
            return state.setIn([action.index, 'completed'], !state.getIn([action.index, 'completed']));
        default:
            return state;
    }
}
