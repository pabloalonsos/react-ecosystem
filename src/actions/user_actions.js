import * as types from '../constants/action_types';

export function allocate(amount) {
    return {
        type: types.ALLOCATE,
        toBeAllocated: amount
    };
}

export function unallocate(amount) {
    return {
        type: types.UNALLOCATE,
        toBeUnallocated: amount
    };
}
