// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	return (
		<div className="Navbar">
			<ul className={`nav ${menuActive ? "menu-active" : ""}`}>
				<div className="brand">
					<Link to="/">
						<h1>
							Clo<span>ck</span>
						</h1>
					</Link>
				</div>
				<div className="menu" onClick={toggleMenu}>
					<span className="bars"></span>
					<span className="bars"></span>
					<span className="bars"></span>
				</div>
				<div className="nav-links">
					<Link to="/">
						<li className="links">Home</li>
					</Link>
					<Link to="/stopwatch">
						<li className="links">Stop Watch</li>
					</Link>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
