import React from 'react';

export default function clock(props) {
    return (
        <div className="grid-column">
            <h3>Clock run time</h3>
            <div className="item">
                <div className="title"><h1><span> {props.time} </span></h1></div>
            </div>
        </div>
    )
}
