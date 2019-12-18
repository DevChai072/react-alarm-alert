import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './component/clock'
import Counter from './component/counter'
import Alarm from './component/alarm'

function App() {
  	return (
    	<div className="container">
			<div className="nav-grid">
				<Clock />
				<Counter />
				<Alarm />
			</div>
		</div>
  	);
}

export default App;
