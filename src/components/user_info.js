import React, { Component, PropTypes } from 'react';

export default class UserInfo extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        onAllocate: PropTypes.func.isRequired,
        onUnallocate: PropTypes.func.isRequired
    };
    render() {
        const { user, onAllocate, onUnallocate } = this.props;
        return (
            <div>
                <button onClick={onAllocate}>Allocate</button>
                <button onClick={onUnallocate}>Unallocate</button>
                <div>{`${user.get('firstName')} ${user.get('lastName')}`}</div>
                <div>Allocated {user.getIn(['money', 'allocated'])}</div>
                <div>Unallocated {user.getIn(['money', 'unallocated'])}</div>
            </div>
        );
    }
};
