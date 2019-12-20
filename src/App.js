import React, { Component } from 'react';
import Layout from './component/layout';

export default class App extends Component {
	constructor() {
        super();
        this.state = {
			time: null,
			score: 0,
			shortTime: null,
			timeAlert: "00:00",
			txtTimeAlert: ""
		}
	}

	componentDidMount() {
        setInterval(() => this.setFomatTime(), 1000);
	}

	setFomatTime() {
        const date = new Date();
        let hours = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        if(minute < 10) minute = "0"+ minute;
        if(second < 10) second = "0"+ second;

		this.setState({
			time: hours + ":" + minute + ":" + second,
			shortTime: hours + ":" + minute
		})
	}
	
	addScore = () => {
        this.setState({
            score: this.state.score + 1
        })
	}
	
	removeScore = () => {
        const isMinScore = this.state.score != 0; 
        if (isMinScore) {
            this.setState({
				score: this.state.score - 1
			})
        }
	}
	
	setTimeAlert = () => {
		let newTime = this.state.txtTimeAlert;
        if (newTime === "") {
            newTime = "00:00";
		}
        this.setState({
            timeAlert: newTime
        })
	}
	
	onTimeAlertChange = (evt) => {
        this.setState({
            txtTimeAlert: evt.target.value
        })
    }

	render() {

		const {time,score,shortTime,timeAlert,txtTimeAlert} = this.state;

		return (
			<Layout 
				time={time} 
				score={score}
				onAddScoreClick={() => this.addScore()}
				onRemoveScoreClick={() => this.removeScore()}
				shortTime={shortTime}
				timeAlert={timeAlert}
				txtTimeAlert={txtTimeAlert}
				onTimeAlertChange={this.onTimeAlertChange}
				onSetTimeAlertClick={() => this.setTimeAlert()}
			/>
		)
	}
}

