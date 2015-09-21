import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Todo from './Todo';

export default class TodoList extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo, index) =>
                        <Todo
                            todo={todo}
                            key={index}
                            onClick={() => this.props.onTodoClick(index)} />
                    )
                }
            </ul>
        );
    }

}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: ImmutablePropTypes.listOf(
        ImmutablePropTypes.contains({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
};
