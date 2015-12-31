import React from 'react';
import GardenActions from '../actions/GardenActions';

export default React.createClass({
    destroyPlant: function() {
        GardenActions.destroy(this.props.id);
    },

    updatePlant: function() {
        GardenActions.update(this.props.id, 'this plant has been watered');
    },

    render: function() {
        return (
            <div>
                <h1>{this.props.displayName}</h1>
                <button onClick={this.destroyPlant}>destroy this plant</button>
                <button onClick={this.updatePlant}>water this plant</button>
            </div>
        );
    }
});
