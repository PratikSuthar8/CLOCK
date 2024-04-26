import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
	const [time, setTime] = useState(getCurrentTime());

	// Update time every second
	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(getCurrentTime());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	function getCurrentTime() {
		const currentTime = new Date();
		const hours = currentTime.getHours();
		const minutes = currentTime.getMinutes();
		const seconds = currentTime.getSeconds();
		const ampm = hours >= 12 ? "PM" : "AM";
		const formattedHours = hours % 12 || 12; // Convert to 12-hour format

		return (
			formattedHours.toString().padStart(2, "0") +
			":" +
			minutes.toString().padStart(2, "0") +
			":" +
			seconds.toString().padStart(2, "0") +
			" " +
			ampm
		);
	}

	return <div className="clock">{time}</div>;
};

export default Clock;
