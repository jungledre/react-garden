import React from 'react';
import data from '../../data';
import Carrot from './Carrot';
import GardenActions from '../actions/GardenActions';
import _ from 'lodash';

export default React.createClass({
    handleClick: function() {
        GardenActions.create('new plant');
    },

    render: function() {
        var self = this;
        var plantsArr = _.toArray(self.props.plants)
        var plants = plantsArr.map(function(plant, idx) {
            return (
                <Carrot key={'carrot-' + idx} id={plant.id} displayName={plant.displayName} />
            )
        })

        return (
            <div>
                <h1>My React Garden</h1>
                <button onClick={this.handleClick}>add a plant</button>
                {plants}
            </div>
        );
    }
});
