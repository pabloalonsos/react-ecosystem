import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render() {
        return (
            <div>
                <Link to="/">Dashboard</Link>
                <span> || </span>
                <Link to="/settings">Settings</Link>
                {this.props.children}
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.node.isRequired
};

export default Main;
