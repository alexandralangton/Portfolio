import React from 'react';

const TimelineElem = (props) => {
	const {
		title,
		company,
		location,
		timeframe,
		overview,
		details,
		logo,
	} = props.details;
	return (
		<div className="align-timeline-box">
			<div className="timeline-box">
				<div className="what-where">
					<p className="exp-title">{title.toUpperCase()}</p>
					<p className="exp-subhead city">{location}</p>
				</div>
				<p className="exp-subhead company">{company}</p>
				<p className="exp-subhead">{overview}</p>
				<span className="circle" />
			</div>
		</div>
	);
};

export default TimelineElem;
