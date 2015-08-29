import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

    render() {
        const { onClick, text, completed } = this.props;
        return  (
            <div onClick={onClick}>
                {completed ? '\u2611 >> ' : '\u2612 >> '}
                {text}
            </div>
        );
    }

}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};
