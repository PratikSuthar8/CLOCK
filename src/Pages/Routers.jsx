import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Stopwatch from "./Stopwatch";
import Worldclock from "./Worldclock";

const Routers = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/stopwatch" element={<Stopwatch />} />
			</Routes>
		</div>
	);
};

export default Routers;
