import Immutable from 'immutable';

import Constants from '../constants';

const initialState = Immutable.fromJS({
    filter: Constants.VISIBILITY_FILTERS.SHOW_ALL
});

export default function visibilityFilter(state = initialState, action) {
    switch (action.type) {
        case Constants.SET_VISIBILITY_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
}
