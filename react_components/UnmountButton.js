import React from 'react';

var UnmountButton = React.createClass({
    unmountApp: function (e) {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    },
    render: function () {
        return (
            <button onClick={this.unmountApp}>Unmount App</button>
        );
    }
});

module.exports = UnmountButton;