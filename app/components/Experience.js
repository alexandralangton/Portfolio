import React from 'react';
import TimelineElem from './TimelineElem';

const experienceDetails = [
	{
		no: 1,
		title: 'Teaching Fellow',
		company: 'The Grace Hopper Program at Fullstack Academy',
		location: 'New York, NY',
		timeframe: '11/2020\u2013present',
		overview:
			'Worked as a teaching assistant and mentor for a cohort of Grace Hopper students. Providing one-on-one support, answering questions, leading algorithm practice for 40 students and acting as a project manager for their group work.',
		details:
			'\u2020 Providing one-on-one support\u2020 Providing one-on-one support\u2020 Providing one-on-one support\u2020 Providing one-on-one support',
		logo: '',
	},
	{
		no: 2,
		title: 'Software Developer in Training',
		company: 'The Grace Hopper Program at Fullstack Academy',
		location: 'New York, NY',
		timeframe: '06/2020\u201310/2020',
		overview:
			"Attended The Grace Hopper Program's immersive 18 week coding bootcamp, focused on the fundamentals of full stack web development",
		details:
			'\u2020 Providing one-on-one support\u2020 Providing one-on-one support\u2020 Providing one-on-one support\u2020 Providing one-on-one support',
		logo: '',
	},
	{
		no: 3,
		title: 'Project Manager',
		company: 'Freedman International',
		location: 'New York, NY',
		timeframe: '10/2018\u201301/2020',
		overview: 'Project managed things',
		details:
			'\u2020 Providing one-on-one support\u2020 Providing one-on-one support\u2020 Providing one-on-one support\u2020 Providing one-on-one support',
		logo:
			'https://media-exp1.licdn.com/dms/image/C560BAQEdEDxu3pJZ2Q/company-logo_200_200/0/1519856070064?e=2159024400&v=beta&t=WwV-LyXiPikc5bz18_pHmO3ApEnnNcP_HERcH3JtNes',
		// },
		// {
		//     title: '',
		//     company: '',
		//     location: '',
		//     timeframe: '',
		//     overview: '',
		//     details: '',
		//     logo: '',
		// },
		// {
		//     title: '',
		//     company: '',
		//     location: '',
		//     timeframe: '',
		//     overview: '',
		//     details: '',
		//     logo: '',
	},
];

const Experience = () => {
	return (
		<section id="experience">
			<h1>EXPERIENCE</h1>
			<div className="timeline-container">
				{experienceDetails.map((role) => {
					return <TimelineElem details={role} key={role.no} />;
				})}
			</div>
		</section>
	);
};

export default Experience;
