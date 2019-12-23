import React from 'react';
import ClockView from '../view/ClockView';

class Clock extends React.Component {
    render() {
        const {date} = this.props;
        return (
          <ClockView time={this.formatTime(date)}/>
        );
    }
    formatTime = (date) => {
        let hours = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

		if(hours < 10) hours = "0"+ hours;
        if(minute < 10) minute = "0"+ minute;
        if(second < 10) second = "0"+ second;

        return hours + ":" + minute + ":" + second;
    }
}

export default Clock;
