import React from 'react';
import Mixin from './Mixin';

// stateless component
var AnotherButton = React.createClass({
    propTypes: {
        update: React.PropTypes.func
    },
    render: function () {
        return <button onClick={this.props.update}>{this.props.txt} - {this.props.val}</button>
    }
});

// ES6 equivalent
//const AnotherButton = props => <button onClick={props.update}>{props.txt} - {props.val}</button>

var AnotherButtonMixed = Mixin(AnotherButton);

module.exports = AnotherButtonMixed;