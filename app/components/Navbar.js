import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const [show, changeShow] = useState(false);
	return (
		<>
			<nav id="mobile-nav">
				<FontAwesomeIcon
					icon={faBars}
					className="bars"
					size="2x"
					onClick={() => changeShow(!show)}
				/>
				{show && (
					<ul>
						<Link to="intro" smooth={true} spy={true} offset={-49}>
							<li
								className="nav-link-li mob-li"
								onClick={() => changeShow(false)}
							>
								ABOUT
							</li>
						</Link>
						<Link to="tech-stack" smooth={true} spy={true} offset={-49}>
							<li
								className="nav-link-li mob-li"
								onClick={() => changeShow(false)}
							>
								TECHNOLOGIES
							</li>
						</Link>
						<Link to="projects" smooth={true} spy={true} offset={-49}>
							<li
								className="nav-link-li mob-li"
								onClick={() => changeShow(false)}
							>
								PROJECTS
							</li>
						</Link>
						<Link to="experience" smooth={true} spy={true} offset={-49}>
							<li
								className="nav-link-li mob-li"
								onClick={() => changeShow(false)}
							>
								EXPERIENCE
							</li>
						</Link>
					</ul>
				)}
			</nav>
			<nav id="desktop-nav">
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
		</>
	);
};

export default Navbar;
