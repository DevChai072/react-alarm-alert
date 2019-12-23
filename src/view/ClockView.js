import React from 'react';

class ClockView extends React.Component {
  render() {
      const {time} = this.props;
    return (
        <div className="grid-box">
            <h3>Clock run time</h3>
            <div className="item">
                <div className="title"><h1><span> {time} </span></h1></div>
            </div>
        </div>
    );
  }
}

export default ClockView;
