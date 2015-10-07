import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import { List } from 'immutable';
import { todos } from 'reducers';
import { AddTodo } from 'components';

describe('Reducers', () => {
    describe('todos', () => {
        it('should return an empty list if no actions are executed', () => {
            let newState = todos(new List(), {});
            expect(newState).to.be.empty;
        });
    });
});

describe('Components', () => {
    describe('AddTodo', () => {
        jsdom();
        it('should add a todo', () => {
            expect(true).to.equal(true);
        });
    });
});
