import React from 'react'
import Cleave from 'cleave.js/react';

export default function alarm(props) {
    return (
        <div className="grid-column">
            <h3>Alarm</h3>
            <div className="item">
                <div className="title">
                    <img className={props.shortTime === props.timeAlert ? "imgAlarm" : ""} src={require('../alarm.png')} alt="logo"></img>
                    <h3>{props.shortTime}</h3>
                </div>
                <div className="title"><h1>{props.timeAlert}</h1></div>
                <div className="footer">
                    <Cleave id="timeAlert" options={{time: true, timePattern: ['h','m']}} placeholder="00:00" onChange={props.onTimeAlertChange}/>
                    <button className="btn" onClick={props.onSetTimeAlertClick}>Set Alarm</button>
                </div>
            </div>
        </div>
    )
}
