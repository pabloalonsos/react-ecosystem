import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Constants from '../constants';
import * as todoActions from '../actions';

import { Filter, AddTodo, TodoList } from '../components';

function selectTodos(todos, visibilityFilter) {
    switch (visibilityFilter.get('filter')) {
        case Constants.VISIBILITY_FILTERS.SHOW_ALL:
            return todos;
        case Constants.VISIBILITY_FILTERS.SHOW_COMPLETED:
            return todos.filter(todo => todo.get('completed'));
        case Constants.VISIBILITY_FILTERS.SHOW_ACTIVE:
            return todos.filter(todo => !todo.get('completed'));
        default:
            return todos;
    }
}

class Dashboard extends Component {

    render() {
        const { actions, todos, visibilityFilter } = this.props;

        return (
            <div>
                <h3>Dashboard</h3>
                <AddTodo onAddTodo={text => actions.addTodo(text)} />
                <Filter
                    visibilityFilter={visibilityFilter}
                    onFilterChange={nextFilter => actions.setVisibilityFilter(nextFilter)} />
                <TodoList todos={selectTodos(todos, visibilityFilter)} onTodoClick={index => actions.completeTodo(index)}/>
            </div>
        );
    }

}

Dashboard.propTypes = {
    actions: PropTypes.object,
    todos: ImmutablePropTypes.listOf(
        ImmutablePropTypes.contains({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    visibilityFilter: PropTypes.object
};

export default connect(
    state => ({ ...state }),
    dispatch => ({ actions: bindActionCreators(todoActions, dispatch) })
)(Dashboard);
