import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h2>{this.props.data.displayName}</h2>
                <p>{this.props.data.description}</p>
            </div>
        );
    }
});
