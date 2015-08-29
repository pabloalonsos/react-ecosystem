import React, { Component, PropTypes } from 'react';
import { VisibilityFilters } from '../actions';

export default class Footer extends Component {

    renderFilter(filter, name) {
        return filter !== this.props.filter ? (
            <div style={{ color: 'red' }} onClick={this.props.onFilterChange.bind(null, filter)}>
                { name }
            </div>
        ) : (
            <div style={{ color: 'green' }}>
                { name }
            </div>
        );
    }

    render() {
        return (
            <div>
                Show:
                    {this.renderFilter(VisibilityFilters.SHOW_ALL, 'All')}
                    {this.renderFilter(VisibilityFilters.SHOW_COMPLETED, 'Completed')}
                    {this.renderFilter(VisibilityFilters.SHOW_ACTIVE, 'Active')}
            </div>
        )
    }

};

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        VisibilityFilters.SHOW_ALL,
        VisibilityFilters.SHOW_COMPLETED,
        VisibilityFilters.SHOW_ACTIVE
    ]).isRequired
};
