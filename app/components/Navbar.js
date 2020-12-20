import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<Link
					to="intro"
					smooth={true}
					spy={true}
					offset={-60}
					activeClass="active"
				>
					<li>ABOUT</li>
				</Link>
				<Link
					to="projects"
					smooth={true}
					spy={true}
					offset={-60}
					activeClass="active"
				>
					<li>PROJECTS</li>
				</Link>
				<Link
					to="experience"
					smooth={true}
					spy={true}
					offset={-60}
					activeClass="active"
				>
					<li>EXPERIENCE</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
