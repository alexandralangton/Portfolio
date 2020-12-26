import React from 'react';
import Bridge from '../images/Bridge.jpeg';

const TechStack = () => {
	return (
		<section id="tech-stack" className="green">
			<div className="inline-flex full">
				<div id="tech-blurb">
					<h1>TECH STACK</h1>
					<span>SOFTWARE</span>
					<span>
						<b>Proficient:</b>
					</span>
					<ul>
						<li>JavaScript</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>PostgreSQL</li>
						<li>HTML & CSS</li>
						<li>React</li>
						<li>React Native</li>
						<li>Redux</li>
						<li>Webpack</li>
						<li>Git & GitHub</li>
					</ul>
					<span>
						<b>Familiar:</b>
					</span>
					<ul>
						<li>SQL</li>
						<li>Heroku</li>
						<li>Firebase</li>
						<li>Travis</li>
						<li>Babel</li>
						<li>Mocha</li>
						<li>Chai</li>
						<li>Jasmine</li>
						<li>TDD</li>
					</ul>
					<span>COLLABORATIVE TOOLS</span>
					<ul>
						<li>Jira</li>
						<li>Smartsheet</li>
						<li>GitHub Projects</li>
						<li>Trello</li>
						<li>Basecamp</li>
						<li>ProofHQ</li>
						<li>Slack</li>
						<li>Microsoft Teams</li>
					</ul>
				</div>
				<div id="tech-pic-container">
					<img src={Bridge} id="tech-pic" />
				</div>
			</div>
		</section>
	);
};

export default TechStack;
