import React from 'react';
import '../myStyle.css';
import Clock from '../component/clock';
import Counter from '../component/counter';
import Alarm from '../component/alarm';

export default function layout(props) {
    return (
        <div className="container">
            <div className="grid-box">
                <Clock time={props.time}/>
            </div>
            <div className="grid-box">
                <Counter 
                    score={props.score}
                    onAddScoreClick={props.onAddScoreClick}
                    onRemoveScoreClick={props.onRemoveScoreClick}
                />
            </div>
            <div className="grid-box">
                <Alarm 
                    shortTime={props.shortTime}
                    timeAlert={props.timeAlert}
                    txtTimeAlert={props.txtTimeAlert}
                    onTimeAlertChange={props.onTimeAlertChange}
                    onSetTimeAlertClick={props.onSetTimeAlertClick}
                />
            </div>
        </div>
    )
}