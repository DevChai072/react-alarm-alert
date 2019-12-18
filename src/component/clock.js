import React, { Component } from 'react'

export default class clock extends Component {
    constructor() {
        super();
        this.state = {
            time: null
        }
    }
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }
    tick() {
        const date = new Date();
        let hours = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        // put prefix 0
        if(minute < 10) minute = "0"+ minute;
        if(second < 10) second = "0"+ second;

        this.setState({
            time: hours + ":" + minute + ":" + second
        })
    }
    render() {
        return (
            <div className="grid-column">
                <h3>Clock run time</h3>
                <div className="item">
                    <div className="title"><h1><span> {this.state.time} </span></h1></div>
                </div>
            </div>
        )
    }
}
