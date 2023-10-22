// 1. import `NextUIProvider` component
import { useState } from 'react';
import './App.css';

function App() {
	const [number, setNumber] = useState('');
	const [result, setResult] = useState(null);
	const [percentage, setPercentage] = useState(null);

	const calculatePercentage = (value) => {
		let percentage = 0;
		if (value < 2000) {
			percentage = 5;
		} else if (value >= 2000 && value <= 4000) {
			percentage = 10;
		} else if (value > 4000) {
			percentage = 15;
		}
		setPercentage(percentage);
		return (value * percentage) / 100;
	};

	const handleChange = (event) => {
		const inputValue = event.target.value;
		setNumber(inputValue);
		if (inputValue) {
			const calculatedResult = calculatePercentage(Number(inputValue));
			setResult(calculatedResult);
		} else {
			setResult(null);
			setPercentage(null);
		}
	};

	return (
		<div className="App">
			<div>{percentage !== null && <span>Percentage: {percentage}%</span>}</div>
			<header className="App-header">
				<input
					type="number"
					value={number}
					onChange={handleChange}
					placeholder="Enter a number"
				/>
				<div>{result !== null && <span>Result: {result.toFixed(2)}</span>}</div>
			</header>
		</div>
	);
}

export default App;
