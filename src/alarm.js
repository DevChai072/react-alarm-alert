import React from 'react';
import pictureAlarm from './alarm.png';

class Alarm extends React.Component {
    constructor() {
        super();
        this.state = {
            timeAlert: "00:00",
            currenTime: "0"
        }
        this.setTimeAlert = this.setTimeAlert.bind(this);
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.getCurrentTime(), 1000);
    }
    render() {

        const isValid = this.state.currenTime == this.state.timeAlert;
        if (isValid) {
            document.getElementById("imgAlarm").style.animation = "shake 0.5s";
            document.getElementById("imgAlarm").style.animationIterationCount = "infinite";
        }

        return(
            <div className="grid-column">
                <h3>Alarm</h3>
                <div className="item">
                    <div className="title">
                        <img id="imgAlarm" src={pictureAlarm} alt="logo"></img>
                        <h3> { this.state.currenTime } </h3>
                    </div>
                    <div className="title"><h1> { this.state.timeAlert } </h1></div>
                    <div className="footer">
                        <input type="time" id="timeAlert" required />
                        <button className="btn" onClick={() => this.setTimeAlert()}>Set Alarm</button>
                    </div>
                </div>
            </div>
        )
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

        document.getElementById("timeAlert").value = "";
    }
}
export default Alarm;