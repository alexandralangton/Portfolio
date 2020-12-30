import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faBriefcase,
	faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

const TimelineElem = (props) => {
	const [showBullets, revealBullets] = useState(false);
	const {
		title,
		company,
		location,
		timeframe,
		overview,
		details,
		job,
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
				<div className="exp-details-button">
					<span className="details" onClick={() => revealBullets(!showBullets)}>
						{showBullets ? `Hide Details` : `See Details`}
					</span>
					<FontAwesomeIcon
						icon={faChevronDown}
						className="exp-arrow"
						onClick={() => revealBullets(!showBullets)}
					/>
				</div>
				{showBullets && (
					<ul>
						{details.split('\u2022').map((bullet, idx) => {
							return <li key={idx}>{bullet}</li>;
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default TimelineElem;
