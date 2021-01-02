import React from 'react';

const TechStack = () => {
	return (
		<section id="tech-stack" className="green">
			<div className="inline-flex full">
				<div id="tech-blurb">
					<div className="border">
						<h1 id="tech-head">TECH STACK</h1>
						<p className="tech-p">
							These are the technologies and tools I know and love as a
							developer and a project&nbsp;manager:
						</p>
						<span className="tech-subhead top">PROFICIENT:</span>
						<div id="tech-flex">
							<div className="tech-col">
								<ul className="tech-ul">
									<li>JavaScript</li>
									<li>Node.js</li>
									<li>Express</li>
									<li>PostgreSQL</li>
									<li>Webpack</li>
								</ul>
							</div>
							<div className="tech-col">
								<ul className="tech-ul">
									<li>HTML & CSS</li>
									<li>React</li>
									<li>React Native</li>
									<li>Redux</li>
									<li>Git & GitHub</li>
								</ul>
							</div>
						</div>
						<span className="tech-subhead">FAMILIAR:</span>
						<div id="tech-flex">
							<div className="tech-col">
								<ul className="tech-ul">
									<li>SQL</li>
									<li>Heroku</li>
									<li>Firebase</li>
									<li>Travis</li>
								</ul>
							</div>
							<div className="tech-col">
								<ul className="tech-ul">
									<li>Babel</li>
									<li>Mocha</li>
									<li>Chai</li>
									<li>Jasmine</li>
								</ul>
							</div>
						</div>
						<span className="tech-subhead">COLLABORATIVE TOOLS:</span>
						<div id="tech-flex">
							<div className="tech-col">
								<ul className="tech-ul">
									<li>Jira</li>
									<li>Smartsheet</li>
									<li>GitHub Projects</li>
									<li>Trello</li>
								</ul>
							</div>
							<div className="tech-col">
								<ul className="tech-ul">
									<li>Basecamp</li>
									<li>ProofHQ</li>
									<li>Slack</li>
									<li>Microsoft Teams</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div id="tech-pic" />
			</div>
		</section>
	);
};

export default TechStack;
