import React from 'react';
import TimelineElem from './TimelineElem';
import experienceDetails from './ExperienceCopy';

const Experience = () => {
	return (
		<section id="experience">
			<h1 id="exp-head" className="green-text">
				EXPERIENCE
			</h1>
			<div className="full flex">
				<span className="green-text">
					<b>Tap the arrows for details</b>
				</span>
			</div>
			<div className="timeline-container">
				{experienceDetails.map((role) => {
					return <TimelineElem details={role} key={role.no} />;
				})}
			</div>
		</section>
	);
};

export default Experience;
