import React from 'react';

var PropsRefresher = React.createClass({
    render: function () {
        return (
            <div>
                <span>Number of times props were refreshed (click at least 5 times):</span>
                <button onClick={this.props.propsUpdate}>{this.props.val}</button>
            </div>
        );
    }
});

module.exports = PropsRefresher;