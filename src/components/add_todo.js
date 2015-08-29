import React, { Component, PropTypes, findDOMNode } from 'react';

export default class AddTodo extends Component {

    handleClick(event) {
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        if (text !== '') {
            this.props.onAddTodo(text);
            node.value = '';
        }
    }

    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={ event => this.handleClick(event)}>
                    Add
                </button>
            </div>
        )
    }

}

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired
};
