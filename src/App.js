import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            score: 0
        }
    }
    render() {

        let scoreUpdate = this.state.score;
        if (scoreUpdate <= 0) scoreUpdate = 0;

        return (
            <div className="App">
                <h1>Your Score: { scoreUpdate }</h1>
                <button onClick={() => this.addScore()}>+</button>
                <button onClick={() => this.removeScore()}>-</button>
            </div>
        )
    }
    addScore() {
        this.setState({
            score: this.state.score + 1
        }) 
    }
    removeScore() {
        this.setState({
            score: this.state.score - 1
        })
    }
}

export default App;
