import React from 'react';
import ImgAlarm from '../image/alarm.png';
import Cleave from 'cleave.js/react';

class AlarmView extends React.Component {
    render() {
        const {time, alertTime, isAlert, onSaveTimeAlertClick, onAlertTimeChange} = this.props;
        return (
            <div className="grid-box">
                <h3>Alarm</h3>
                <div className="item">
                    <div className="title">
                        <img className={isAlert ? "imgAlarm" : ""} src={ImgAlarm} alt="logo"></img>
                        <h3>{time}</h3>
                    </div>
                    <div className="title"><h1>{alertTime}</h1></div>
                    <div className="footer">
                        <Cleave id="timeAlert" options={{time: true, timePattern: ['h','m']}} placeholder="00:00" onChange={onAlertTimeChange}/>
                        <button className="btn" onClick={onSaveTimeAlertClick}>Set Alarm</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlarmView;
