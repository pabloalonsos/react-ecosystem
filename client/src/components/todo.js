import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class Todo extends Component {

    render() {
        const { onClick, todo } = this.props;

        const text = todo.get('text');
        const completed = todo.get('completed');

        return  (
            <div style={{color: completed ? 'green' : 'red'}} onClick={onClick}>
                {completed ? '\u2611 >> ' : '\u2612 >> '}
                {text}
            </div>
        );
    }

}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    todo: ImmutablePropTypes.contains({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired
};
