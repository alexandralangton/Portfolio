import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faBriefcase,
	faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true, useClassNames: true });

const TimelineElem = (props) => {
	const [showBullets, revealBullets] = useState(false);
	const {
		title,
		company,
		location,
		timeframe,
		overview,
		details,
		logo,
		job,
	} = props.details;

	return (
		<div className="align-timeline-box" data-aos="slide-up">
			<div className="timeline-box">
				<div className="what-where">
					<div>
						<p className="exp-title">{title.toUpperCase()}</p>
						<p className="exp-subhead city">{location}</p>
					</div>
					<img src={logo} className="exp-logo" alt={`${company} logo`} />
				</div>
				<div className="exp-details-button">
					<p className="exp-subhead company">{company}</p>
					<FontAwesomeIcon
						icon={faChevronDown}
						className="exp-arrow"
						onClick={() => revealBullets(!showBullets)}
						flip={showBullets ? 'vertical' : null}
					/>
				</div>
				<span className="circle" />
				<FontAwesomeIcon
					icon={job ? faBriefcase : faGraduationCap}
					className={`exp-icon ${job ? 'briefcase' : 'cap'}`}
				/>
				{showBullets && (
					<>
						<p className="exp-subhead">{overview}</p>
						<ul className="exp-ul">
							{details.split('.').map((bullet, idx) => {
								return <li key={idx}>{bullet}</li>;
							})}
						</ul>
					</>
				)}
			</div>
			<div className="date-box">{timeframe}</div>
		</div>
	);
};

export default TimelineElem;
