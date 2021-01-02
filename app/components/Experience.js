import React from 'react';
import TimelineElem from './TimelineElem';
import experienceDetails from './ExperienceCopy';

const Experience = () => {
	return (
		<section id="experience">
			<h1 id="exp-head">EXPERIENCE</h1>
			<div className="timeline-container">
				{experienceDetails.map((role) => {
					return <TimelineElem details={role} key={role.no} />;
				})}
			</div>
		</section>
	);
};

export default Experience;
