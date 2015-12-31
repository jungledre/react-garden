import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>{this.props.plants}</h1>
                <h2>{this.props.data.displayName}</h2>
                <p>{this.props.data.description}</p>
            </div>
        );
    }
});
