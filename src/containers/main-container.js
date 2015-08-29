
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

import Filter from '../components/footer';
import AddTodo from '../components/add_todo';
import TodoList from '../components/todo_list';

class Main extends Component {

    render() {
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div>
                Hello
                <AddTodo onAddTodo={ text => dispatch(addTodo(text)) } />
                <Filter
                    filter={visibilityFilter}
                    onFilterChange={ nextFilter => dispatch(setVisibilityFilter(nextFilter)) } />
                <TodoList todos={visibleTodos} onTodoClick={ index => dispatch(completeTodo(index)) }/>
            </div>
        )
    }

}

Main.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf([
        VisibilityFilters.SHOW_ALL,
        VisibilityFilters.SHOW_COMPLETED,
        VisibilityFilters.SHOW_ACTIVE
    ]).isRequired
};

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

export default connect( state => {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
})(Main);
