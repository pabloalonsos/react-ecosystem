import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as AllActions from '../actions';

import Filter from '../components/filter';
import AddTodo from '../components/add_todo';
import TodoList from '../components/todo_list';

class Main extends Component {

    render() {

        const { actions, todos, visibilityFilter } = this.props;

        return (
            <div>
                <AddTodo onAddTodo={ text => actions.addTodo(text) } />
                <Filter
                    visibilityFilter={ visibilityFilter }
                    onFilterChange={ nextFilter => actions.setVisibilityFilter(nextFilter) } />
                <TodoList todos={ selectTodos(todos, visibilityFilter) } onTodoClick={ index => actions.completeTodo(index) }/>
            </div>
        )
    }

}

Main.propTypes = {
    todos: ImmutablePropTypes.listOf(
        ImmutablePropTypes.contains({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
};

function selectTodos(todos, visibilityFilter) {
    switch (visibilityFilter.get('filter')) {
        case AllActions.VisibilityFilters.SHOW_ALL:
            return todos;
        case AllActions.VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case AllActions.VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

export default connect(
    state => ({...state}),
    dispatch => ({ actions: bindActionCreators(AllActions, dispatch)})
)(Main);
