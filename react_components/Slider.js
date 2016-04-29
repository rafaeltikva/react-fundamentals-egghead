import React from 'react';

var Sliders = React.createClass({

    propTypes: {
        data: React.PropTypes.array
    },
    loadSliders: function () {
        return this.props.data;
    },

    componentDidMount: function () {
        this.setState({sliders: this.loadSliders()});
    },
    getInitialState: function () {
        return {sliders: []};
    },
    render: function () {

        var sliders = this.props.data.map(function (sliderItem) {
            return (
                <div className="slider-wrap">
                    <Slider key={sliderItem.slider.id} color={sliderItem.slider.color} min={0} max={255}
                            defaultValue={128}/>
                    <hr />
                </div>

            );
        });

        return (
            <div id="sliders-wrap">
                {sliders}
            </div>
        );
    }
});

class Slider extends React.Component {
    constructor() {

        Slider.propTypes = {
            color: React.PropTypes.string
        };

        super();

        this.minValue = 0;
        this.maxValue = 255;
        this.defaultValue = 128;
        this.state = {
            txt: this.defaultValue
        }

    }

    update(e) {
        this.setState({
            txt: e.target.value
        });
    }

    render() {
        return (
            <div>
                <span>{this.props.color}</span>
                <input id={"slider-" + this.props.color} type="range" min={this.props.min} max={this.props.max}
                       defaultValue={this.props.defaultValue} onChange={this.update.bind(this)}/>
                {this.state.txt}
            </div>
        )
    }
}

module.exports = {
    Slider: Slider,
    Sliders: Sliders
};
