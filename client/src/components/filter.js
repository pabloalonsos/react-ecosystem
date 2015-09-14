import React, { Component, PropTypes } from 'react';
import { is } from 'immutable';
import ImmutableproPropTypes from 'react-immutable-proptypes';

import Constants from '../constants';

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
                    {this.renderFilter(Constants.VISIBILITY_FILTERS.SHOW_ALL, 'All')}
                    {this.renderFilter(Constants.VISIBILITY_FILTERS.SHOW_COMPLETED, 'Completed')}
                    {this.renderFilter(Constants.VISIBILITY_FILTERS.SHOW_ACTIVE, 'Active')}
            </div>
        );
    }
}

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    visibilityFilter: ImmutableproPropTypes.contains({
        filter: PropTypes.oneOf([
            Constants.VISIBILITY_FILTERS.SHOW_ALL,
            Constants.VISIBILITY_FILTERS.SHOW_COMPLETED,
            Constants.VISIBILITY_FILTERS.SHOW_ACTIVE
        ]).isRequired
    }).isRequired
};
