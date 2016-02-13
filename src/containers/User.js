import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user_actions';
import UserInfo from '../components/user_info';

class User extends Component {
    constructor(props) {
        super(props);
        this.onAllocate = this.onAllocate.bind(this);
        this.onUnallocate = this.onUnallocate.bind(this);
    }
    onAllocate() {
        this.props.allocate(1);
    }
    onUnallocate() {
        this.props.unallocate(1);
    }
    render() {
        const { user } = this.props;
        return (
            <div>
                <p>User page...</p>
                <UserInfo
                    user={this.props.user}
                    onAllocate={this.onAllocate}
                    onUnallocate={this.onUnallocate}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(UserActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
