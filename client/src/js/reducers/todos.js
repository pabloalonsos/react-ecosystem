import { List, fromJS } from 'immutable';
import Constants from '../constants';

export default function todos(state = new List(), action) {
    switch (action.type) {
        case Constants.ADD_TODO:
            return state.push(fromJS({
                text: action.text,
                completed: false
            }));
        case Constants.COMPLETE_TODO:
            return state.setIn([action.index, 'completed'], !state.getIn([action.index, 'completed']));
        default:
            return state;
    }
}
