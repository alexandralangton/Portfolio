import React from 'react';
import TechStackCol from './TechStackCol';

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
					<div className="border">
						<h1 id="tech-head">TECH STACK</h1>
						<p className="tech-p">
							These are the technologies and tools I know and love as a
							developer and a project manager:
						</p>
						<span className="tech-subhead top">PROFICIENT:</span>
						<div className="tech-flex">
							<TechStackCol
								technology={proficient.slice(0, proficient.length / 2)}
							/>
							<TechStackCol
								technology={proficient.slice(proficient.length / 2)}
							/>
						</div>
						<span className="tech-subhead">FAMILIAR:</span>
						<div className="tech-flex">
							<TechStackCol
								technology={familiar.slice(0, familiar.length / 2)}
							/>
							<TechStackCol technology={familiar.slice(familiar.length / 2)} />
						</div>
						<span className="tech-subhead">COLLABORATIVE TOOLS:</span>
						<div className="tech-flex">
							<TechStackCol
								technology={collabTools.slice(0, collabTools.length / 2)}
							/>
							<TechStackCol
								technology={collabTools.slice(collabTools.length / 2)}
							/>
						</div>
					</div>
				</div>
				<div id="tech-pic" />
			</div>
		</section>
	);
};

export default TechStack;
