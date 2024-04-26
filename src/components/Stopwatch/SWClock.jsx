import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

const SWClock = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [startTime, setStartTime] = useState(0);
	const [elapsedTime, setElapsedTime] = useState(0);

	useEffect(() => {
		let intervalId;

		if (isRunning) {
			// If stopwatch is started, record the start time
			setStartTime(Date.now() - elapsedTime); // Adjust start time based on elapsed time
			intervalId = setInterval(() => {
				// Update elapsed time every 10 milliseconds
				setElapsedTime(Date.now() - startTime);
			}, 10);
		} else {
			clearInterval(intervalId); // Clear interval if stopwatch is stopped
		}

		return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
	}, [isRunning, elapsedTime, startTime]);

	const startStop = () => {
		setIsRunning((prevIsRunning) => !prevIsRunning);
	};

	const reset = () => {
		setElapsedTime(0); // Reset elapsed time
		setIsRunning(false); // Stop the stopwatch
	};

	const formatTime = (timeInMilliseconds) => {
		const hours = Math.floor(timeInMilliseconds / 3600000);
		const minutes = Math.floor((timeInMilliseconds % 3600000) / 60000);
		const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);
		const milliseconds = Math.floor(timeInMilliseconds % 1000);

		return (
			String(hours).padStart(2, "0") +
			":" +
			String(minutes).padStart(2, "0") +
			":" +
			String(seconds).padStart(2, "0") +
			":" +
			String(milliseconds).padStart(3, "0")
		);
	};

	return (
		<div className="stopwatch">
			<div className="time">{formatTime(elapsedTime)}</div>
			<div className="controls">
				<button
					onClick={startStop}
					className={
						"btn " +
						(isRunning ? "stopbtn-outline" : "startbtn-outline")
					}
				>
					{isRunning ? "Stop" : "Start"}
				</button>
				<button onClick={reset} className="btn rsbtn-outline">
					Reset
				</button>
			</div>
		</div>
	);
};

export default SWClock;
