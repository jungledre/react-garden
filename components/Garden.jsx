import React from 'react';
import data from '../data';
import Carrot from './Carrot';
import Radish from './Radish';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>My React Garden</h1>
                <Carrot data={data.carrot} />
                <Radish data={data.radish} />
            </div>
        );
    }
});
