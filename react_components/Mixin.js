import React from 'react';
import ReactDOM from 'react-dom'

// Mixin - later to be added to components
var Mixin = function (InnerComponent) {
    return React.createClass({
        getDefaultProps: function () {
            console.log('running getDefaultProps in InnerComponent');
            return {
                val: 0,
                txt: 'some default text'
            }
        },

        getInitialState: function () {
            console.log('running getInitialState in InnerComponent');
            return {val: this.props.val};
        },
        update: function (e) {
            console.log('Updating InnerComponent');
            console.log(this);
            this.setState({val: this.state.val + 1})

        },

        componentWillMount: function () {
            console.log('Inner Component is mounting...');
        },

        componentDidMount: function () {
            console.log('Inner Component mounted successfully: ');
            console.log(ReactDOM.findDOMNode(this));

        },

        componentWillUnmount: function () {
            console.log('Inner Component is unmounting');
        },

        componentWillReceiveProps: function (nextProps) {
            console.log('Inner component receiving new props');
            console.log(nextProps);
            console.log('Setting component state with new val: ' + nextProps.val);
            this.setState({val: nextProps.val});
        },

        shouldComponentUpdate: function (nextProps, nextState) {
            console.log('InnerComponent will update');
            return true;
        },

        componentDidUpdate: function (prevProps, nextProps) {
            console.log('The Inner component was updated');
            console.log('prevProps', prevProps);
            console.log('nextProps', nextProps);
        },
        render: function () {
            return (
                <InnerComponent update={this.update} {...this.state} {...this.props} />
            );
        }
    });
}; // end of Mixin

module.exports = Mixin;