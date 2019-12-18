import React, { Component } from 'react'
import Cleave from 'cleave.js/react';

export default class Alarm extends Component {
    constructor() {
        super();
        this.state = {
            timeAlert: "00:00",
            currenTime: "0"
        }
        this.setTimeAlert = this.setTimeAlert.bind(this);
    }
    componentDidMount() {
        setInterval(() => this.getCurrentTime(), 1000);
    }
    getCurrentTime() {
        const date = new Date();
        let hours = date.getHours();
        let minute = date.getMinutes();

        // put prefix 0
        if(hours < 10) hours = "0"+ hours;
        if(minute < 10) minute = "0"+ minute;
        
        this.setState({
            currenTime: hours + ":" + minute
        })
    }
    setTimeAlert() {
        let newTime = document.getElementById("timeAlert").value;
        if (newTime == 0 || newTime === "") {
            newTime = "00:00";
        }
        this.setState({
            timeAlert: newTime,
        })
    }
    render() {
        const isValid = this.state.currenTime == this.state.timeAlert;
        if (isValid) {
            document.getElementsByTagName("img")[0].setAttribute("class", "imgAlarm");
        }

        return (
            <div className="grid-column">
                <h3>Alarm</h3>
                <div className="item">
                    <div className="title">
                        <img id="imgAlarm" src={require('../alarm.png')} alt="logo"></img>
                        <h3> { this.state.currenTime } </h3>
                    </div>
                    <div className="title"><h1> { this.state.timeAlert } </h1></div>
                    <div className="footer">
                        <Cleave id="timeAlert" options={{time: true, timePattern: ['h','m']}} placeholder="00:00"/>
                        <button className="btn" onClick={() => this.setTimeAlert()}>Set Alarm</button>
                    </div>
                </div>
            </div>
        )
    }
}
