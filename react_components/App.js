import React from 'react';
import ReactDOM from 'react-dom'
import Squad from './Squad';
import Button from './Button';
import AnotherButtonMixed from './AnotherButton';
import UnmountButton from './UnmountButton';
import LabelMixed from './Label';
import {Slider, Sliders} from './Slider';
import Count from './Count';
import PropsRefresher from './PropsRefresher';
import Timer from './Timer';

import sliders from './utils/sliders';
import players from './utils/players';

class App extends React.Component {
    constructor() {

        console.log('running constructor...');
        super();
        console.log('the "this" value in constructor')
        console.log(this);
        this.state = {
            count: 1,
            age: 0,
            increasing: false
        };
        this.update = this.update.bind(this);
    }

    update(e) {
        console.log('this: ');
        console.log(this);
        console.log(this.refs);
        this.setState({
            count: this.state.count * this.state.multiplyBy
        });
    }

    updateProps() {
        console.log('Updating props...');
        ReactDOM.render(
            <App greeting="Hello Again" txt="Asshole" val={this.props.val + 1}/>, document.getElementById('app')
        );
    }

    componentWillMount() {
        console.log('App Component is mounting...');
        this.setState({
            multiplyBy: 2,
        });
    }

    componentDidMount() {
        console.log('App Component mounted successfully: ');
        console.log(ReactDOM.findDOMNode(this));

    }

    componentWillUnmount() {
        console.log('App Component is unmounting...');
        clearInterval(this.interval);
    }

    componentWillReceiveProps(nextProps) {
        console.log('App component receiving new props...');
        this.setState({increasing: nextProps.val > this.props.val});
        console.log('increasing is ' + this.state.increasing);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0
    }

    componentDidUpdate(prevProps, nextProps) {
        console.log('The App component was updated...');
        console.log('prevProps', prevProps);
        console.log('nextProps', nextProps);
    }

    render() {
        console.log('rendering...');
        return (
            <div id="main-wrapper">
                <h1>{this.props.greeting}, {this.props.txt}</h1>
                <Sliders data={sliders}/>

                <div id="count-wrapper">
                    <Button onClick={this.update}><span>Start Counting</span></Button>
                    <AnotherButtonMixed txt="AnotherButton with Mixin" val={this.state.val}/>
                    <LabelMixed txt="LabelMixed with Mixin"/>
                    <Count ref="count" count={this.state.count} multiplyByText={this.state.multiplyBy}/>
                </div>
                <Squad players={players}/>

                <div className="controls">
                    <PropsRefresher propsUpdate={this.updateProps.bind(this)} val={this.props.val}/>
                    <UnmountButton />
                    <Timer />
                </div>

            </div>
        );
    }
}

// Optional - configure the types of allowed properties
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

// Optional - set default parameters for our properties
App.defaultProps = {
    txt: 'this is the default text',
    cat: 5,
    val: 0
};

// Equivalent to: (with a stateless function component)
//const App = () => <h1>Hello There</h1>

ReactDOM.render(
    <App greeting="Hola" txt="How are you today madafaka?"/>,
    document.getElementById('app')
);

export default App