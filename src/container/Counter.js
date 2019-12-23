import React from 'react';
import CounterView from '../view/CounterView';

class Counter extends React.Component {
    state = {
        score: 0
    }
    increment = () => {
        this.setState({score: this.state.score + 1})
    }
    decrement = () => {
        const isMinScore = this.state.score != 0;
        if (isMinScore) {
            this.setState({score: this.state.score - 1})
        }
    }
    render() {
        return (
          <CounterView
                score={this.state.score}
                onIncrementClick={() => {this.increment()}}
                onDecrementClick={() => {this.decrement()}}
            />
        );
    }
}

export default Counter;
