import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<Link to="about" smooth={true} spy={true} activeClass="active">
					<li>ABOUT</li>
				</Link>
				<Link to="projects" smooth={true} spy={true} activeClass="active">
					<li>PROJECTS</li>
				</Link>
				<Link to="experience" smooth={true} spy={true} activeClass="active">
					<li>EXPERIENCE</li>
				</Link>
				<Link to="hello" smooth={true} spy={true} activeClass="active">
					<li>CONTACT</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
