import Immutable from 'immutable';
import {
    ALLOCATE,
    UNALLOCATE
} from '../constants/action_types';

const initialUserState = Immutable.Map({
    firstName: 'Pablo',
    lastName: 'Alonso',
    money: Immutable.Map({
        unallocated: 999.95,
        allocated: 0.0
    })
});

export default function user(state = initialUserState, action) {
    let allocated;
    let unallocated;
    switch (action.type) {
        case ALLOCATE:
            const { toBeAllocated } = action;
            allocated = state.getIn(['money', 'allocated']);
            unallocated = state.getIn(['money', 'unallocated']);
            if (toBeAllocated > unallocated) {
                return state
                    .setIn(['money', 'allocated'], allocated + unallocated)
                    .setIn(['money', 'unallocated'], 0);
            } else {
                return state
                    .setIn(['money', 'allocated'], allocated + toBeAllocated)
                    .setIn(['money', 'unallocated'], unallocated - toBeAllocated);
            }
        case UNALLOCATE:
            const { toBeUnallocated } = action;
            allocated = state.getIn(['money', 'allocated']);
            unallocated = state.getIn(['money', 'unallocated']);
            if (toBeUnallocated > allocated) {
                return state
                    .setIn(['money', 'allocated'], 0)
                    .setIn(['money', 'unallocated'], unallocated + allocated);
            } else {
                return state
                    .setIn(['money', 'allocated'], allocated - toBeUnallocated)
                    .setIn(['money', 'unallocated'], unallocated + toBeUnallocated);
            }
        default:
            return state;
    }
}
