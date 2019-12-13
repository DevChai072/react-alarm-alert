import React from 'react'

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0
        }
    }
    render() {
        return(
            <div className="grid-column">
                <h3>Counter score</h3>
                <div className="item">
                    <div className="title"><h1>Score: { this.state.score }</h1></div>
                    <div className="footer">
                        <button className="btn" onClick={() => this.addScore()}>+</button>
                        <button className="btn" onClick={() => this.removeScore()}>-</button>
                    </div>
                </div>
            </div>
        )
    }
    addScore() {
        this.setState({
            score: this.state.score + 1
        })
    }
    removeScore() {
        const isMinScore = this.state.score != 0; 
        if (isMinScore) {
            this.setState({
                score: this.state.score - 1
            })
        }
    }
}
export default Counter;