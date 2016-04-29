import React from 'react';
import Mixin from './Mixin';

const Label = props => <label onMouseMove={props.update}>{props.txt}: {props.val}</label>

var LabelMixed = Mixin(Label);

module.exports = LabelMixed;
