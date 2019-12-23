import React from 'react';

class CounterView extends React.Component {
    render() {
        const {score, onIncrementClick, onDecrementClick} = this.props;
        return (
            <div className="grid-box">
                <h3>Counter score</h3>
                <div className="item">
                    <div className="title"><h1>Score: {score}</h1></div>
                    <div className="footer">
                        <button className="btn" onClick={onIncrementClick}>+</button>
                        <button className="btn" onClick={onDecrementClick}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterView;
