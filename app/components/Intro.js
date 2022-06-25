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
						I've spent my career in the marketing industry, first as an
						experienced international project manager, now working as a software
						engineer in MarTech. I love creatively solving complex technical
						challenges, learning new technologies, and helping my clients and
						colleagues succeed. I bring a high level of attention to detail to
						all that I do, as well as a belief that if something is worth doing,
						it's worth excelling at.
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
