import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<nav>
			<ul className="nav-link">
				<Link to="intro" smooth={true} spy={true} offset={-63}>
					<li className="nav-link-li">ABOUT</li>
				</Link>
				<Link to="tech-stack" smooth={true} spy={true} offset={-63}>
					<li className="nav-link-li">TECHNOLOGIES</li>
				</Link>
				<Link to="projects" smooth={true} spy={true} offset={-63}>
					<li className="nav-link-li">PROJECTS</li>
				</Link>
				<Link to="experience" smooth={true} spy={true} offset={-63}>
					<li className="nav-link-li">EXPERIENCE</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
