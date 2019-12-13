import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "0:00:00"
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    render() {
        return(
            <div className="grid-column">
                <h3>Clock run time</h3>
                <div className="item">
                    <div className="title"><h1><span> {this.state.time} </span></h1></div>
                </div>
                <div className="lineEmpty"></div>
                <h3>Clock run time [Click]</h3>
                <div className="item">
                    <div className="title" id="showTime"><h1> {this.state.time} </h1></div>
                    <div className="footer">
                        <button className="btn" onClick={() => this.getCurrentTime()}>Current Time</button>
                    </div>
                </div>
            </div>
        )
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

    getCurrentTime() {
        document.getElementById("showTime").style.display = "block";
    }
}
export default Clock;