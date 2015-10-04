import { expect } from 'chai';
import { List } from 'immutable';
import { todos } from 'reducers';

/*eslint-disable */
describe('Reducers', function () {
    describe('todos', function () {
        it('should return an empty list if no actions are executed', function () {
            let newState = todos(new List(), {});
            expect(newState).to.be.empty;
        });
    });
});
/*eslint-enable */
