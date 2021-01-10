import React from 'react';
import TechStackSection from './TechStackSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true });

const proficient = [
	'JavaScript',
	'Node.js',
	'Express',
	'PostgreSQL',
	'Webpack',
	'HTML & CSS',
	'React',
	'React Native',
	'Redux',
	'Git & GitHub',
];
const familiar = [
	'SQL',
	'Firebase',
	'Heroku',
	'Travis',
	'Babel',
	'Mocha',
	'Chai',
	'Jasmine',
];
const collabTools = [
	'Jira',
	'Smartsheet',
	'GitHub Projects',
	'Trello',
	'Basecamp',
	'ProofHQ',
	'Slack',
	'Microsoft Teams',
];

const TechStack = () => {
	return (
		<section id="tech-stack" className="green">
			<div className="inline-flex full">
				<div id="tech-blurb">
					<div
						className="border"
						data-aos="fade-up"
						data-aos-offset="400"
						data-aos-duration="1000"
					>
						<h1 id="tech-head">TECH STACK</h1>
						<p className="tech-p">
							These are the technologies and tools I know and love as a
							developer and a project manager:
						</p>
						<TechStackSection name="proficient" tech={proficient} />
						<TechStackSection name="familiar" tech={familiar} />
						<TechStackSection name="collaborative tools" tech={collabTools} />
					</div>
					<div id="tech-pic" />
				</div>
			</div>
		</section>
	);
};

export default TechStack;
