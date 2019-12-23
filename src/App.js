import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './container/Clock';
import Counter from './container/Counter';
import Alarm from './container/Alarm';

class App extends React.Component {
    state = { date: new Date() }

    componentDidMount(){
        this.setIntervalID = setInterval(() => {this.newTime()}, 1000);
    }

    componentWillUnmount() {
		clearInterval(this.setIntervalID);
	}

    newTime = () => {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const {date} = this.state;
        return (
            <div className="container">
                <Clock date={date}/>
                <Counter />
                <Alarm date={date}/>
            </div>
        );
    }
}

export default App;
