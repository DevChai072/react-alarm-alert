import React from 'react';
import AlarmView from '../view/AlarmView';

class Alarm extends React.Component {
    state = {
        alertTime: "",
        txtTimeAlert: ""
    }

    formatTime = (date) => {
        let hours = date.getHours();
        let minute = date.getMinutes();

		if(hours < 10) hours = "0"+ hours;
        if(minute < 10) minute = "0"+ minute;

        return hours + ":" + minute;
    }

    alertTimeChange = (value) => {
        this.setState({txtTimeAlert: value});
    }

    saveTimeAlert = () => {
        let newTime = this.state.txtTimeAlert;
        if (newTime === "") {
            newTime = "00:00";
		}
        this.setState({alertTime: newTime});
    }

    render() {
        const {date} = this.props;
        const {alertTime} = this.state;
        const isAlert = this.formatTime(date) === alertTime;

        return (
            <AlarmView 
                time={this.formatTime(date)}
                alertTime={alertTime}
                isAlert={isAlert}
                onSaveTimeAlertClick={() => {this.saveTimeAlert()}}
                onAlertTimeChange={(evt) => {this.alertTimeChange(evt.target.value)}}
            />
        );
    }
}

export default Alarm;
