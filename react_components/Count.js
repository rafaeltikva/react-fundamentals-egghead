import React from 'react';

class Count extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.count}/>
                <span>Multiplying by: {this.props.multiplyByText}</span>
            </div>
        );
    }
}

module.exports = Count;