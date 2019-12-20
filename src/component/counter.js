import React from 'react';

export default function counter(props) {
    return (
        <div>
            <div className="grid-column">
                <h3>Counter score</h3>
                <div className="item">
                    <div className="title"><h1>Score: {props.score}</h1></div>
                    <div className="footer">
                        <button className="btn" onClick={props.onAddScoreClick}>+</button>
                        <button className="btn" onClick={props.onRemoveScoreClick}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
