import Immutable from 'immutable';
import { VisibilityFilters } from '../actions';
import { SET_VISIBILITY_FILTER } from '../actions';

const { SHOW_ALL } = VisibilityFilters;

const initialState = Immutable.fromJS({ filter: SHOW_ALL });

export default function visibilityFilter(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
}
