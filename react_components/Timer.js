import React from 'react';
import ReactDOM from 'react-dom';

var Timer = React.createClass({
    getInitialState: function () {
        return {age: 0};
    },
    howLongCanYouGo: function (seconds) {
        this.setState({age: this.state.age + seconds});
    },
    componentDidMount: function () {
        console.log('Timer Component mounted successfully: ');
        console.log(ReactDOM.findDOMNode(this));
        this.interval = setInterval(this.howLongCanYouGo.bind(this, 1), 1000);
    },

    componentWillUnmount() {
        console.log('Timer Component is unmounting...');
        clearInterval(this.interval);
    },
    render: function () {
        return (
            <div className="program-age">
                <span>Program Age: </span><label>{this.state.age}</label>
            </div>
        );
    }
});

module.exports = Timer;