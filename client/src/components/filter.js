import React, { Component, PropTypes } from 'react';
import { is } from 'immutable';
import ImmutableproPropTypes from 'react-immutable-proptypes';
import { VisibilityFilters } from '../actions';

export default class Filter extends Component {

    renderFilter(filter, name) {
        return !is(this.props.visibilityFilter.get('filter'), filter) ? (
            <div style={{ color: 'red' }} onClick={this.props.onFilterChange.bind(null, filter)}>
                {name}
            </div>
        ) : (
            <div style={{ color: 'green' }}>
                {name}
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
        );
    }

}

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    visibilityFilter: ImmutableproPropTypes.contains({
        filter: PropTypes.oneOf([
            VisibilityFilters.SHOW_ALL,
            VisibilityFilters.SHOW_COMPLETED,
            VisibilityFilters.SHOW_ACTIVE
        ]).isRequired
    }).isRequired
};
