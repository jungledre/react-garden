import React from 'react';
import Garden from './Garden';
var GardenStore = require('../stores/GardenStore');

function getGardenState() {
    return {
        plants: GardenStore.getAll(),
    };
}

export default React.createClass({

    getInitialState: function() {
        return getGardenState();
    },

    componentDidMount: function() {
        GardenStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        GardenStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getGardenState());
    },

    render: function() {
        return (
            <Garden plants={this.state.plants} />
        );
    }
});
