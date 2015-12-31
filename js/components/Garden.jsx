import React from 'react';
import data from '../../data';
import Carrot from './Carrot';
import Radish from './Radish';
import GardenActions from '../actions/GardenActions';
import _ from 'lodash';

export default React.createClass({
    handleClick: function() {
        GardenActions.create('new carrot');
    },

    render: function() {
        let self = this;
        let plantsArr = _.toArray(self.props.plants)
        let plants = plantsArr.map(function(plant, idx) {
            return (
                <Carrot key={'carrot-' + idx} id={plant.id} displayName={plant.displayName} />
            )
        })

        return (
            <div>
                <h1>My React Garden</h1>
                <button onClick={this.handleClick}>add a plant</button>
                <Radish data={data.radish} />
                {plants}
            </div>
        );
    }
});
