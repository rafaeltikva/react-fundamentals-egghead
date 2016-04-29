import React from 'react';
import ReactDOM from 'react-dom';

var App2 = React.createClass({
    getInitialState: function () {
        return {
            input: '/* Add your JSX here */',
            output: '',
            err: ''
        }
    },
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },

    render: function () {
        return (
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea name="input-text" id="input-text" cols="30" rows="10" defaultValue={this.state.input} />
                    <pre className="output-text" id="output-text">{this.state.output}</pre>
                </div>
            </div>
        );

    }

});

ReactDOM.render(
    <App2 />,
    document.getElementById('app')
);

export default App2;