import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
	return (
		<section id="intro">
			<div>
				<div id="intro-cont">
					<h2 id="intro-head">
						Hello! I'm Alexandra Langton, a fullstack software engineer based in
						New&nbsp;York&nbsp;City.
					</h2>
				</div>
				<div id="intro-blurb">
					<p className="max-size">
						A recent Teaching Fellow at and graduate of{' '}
						<b>
							<a href="https://www.gracehopper.com/">
								The Grace Hopper Program
							</a>
						</b>{' '}
						at Fullstack Academy&mdash;a fast-paced 17 week immersive coding
						bootcamp where I learned the fundamentals of fullstack web
						development, focusing on <b>PostgreSQL</b>, <b>Express</b>,{' '}
						<b>React</b>, <b>Redux</b>, and <b>Node.js</b>.
					</p>
					<p className="max-size">
						I'm currently looking for a full time role as a developer. Until
						then I will keep doing what I love&mdash;writing well organized,
						clean code that solves real world problems.
					</p>
				</div>
				<div className="flex">
					<div className="icon-flex">
						<FontAwesomeIcon icon={faJsSquare} className="intro-icon" />
						<FontAwesomeIcon icon={faDatabase} className="intro-icon" />
						<FontAwesomeIcon icon={faGitAlt} className="intro-icon small" />
						<FontAwesomeIcon icon={faLaptopCode} className="intro-icon" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
