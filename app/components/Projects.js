import React from 'react';
import SingleProject from './SingleProject';
import GS from '../images/GS.png';

const projectList = [
	{
		projectNo: 1,
		name: 'ACCOUNTABEE',
		img: GS,
		link1: 'VIDEO DEMO',
		link1URL:
			'https://www.youtube.com/watch?v=FPdc90aeMHg&list=PLx0iOsdUOUmlk2heasTPCfEM8cj3BD8VS&index=5',
		link2: 'GITHUB',
		link2URL: 'https://github.com/AccountaBee/AccountaBee_Frontend',
		description:
			'AccountaBee is a social goal-tracking mobile app, which lets users set weekly goals with their friends and keep each other socially accountable. AccountaBee was developed as part of a team over a two week sprint, and was an enjoyable way to explore the technical challenges of creating a social network from an organizational perspective.',
	},
	{
		projectNo: 2,
		name: 'ENGLISH WEBSITE LOCALIZER',
		img: GS,
		link1: 'GITHUB',
		link1URL: 'https://github.com/alexandralangton/UKEN-Chrome-Extension',
		link2: null,
		link2URL: null,
		description: `Inspired by my experiences as a British person attempting to navigate an American kitchen and recipe websites, this Google Chrome Extension translates whatever website you're on from American into British English, checking a dictionary I compiled of over 400 terms and phrases, and inserting conversion pop-ups for common terms.
    Currently under development&mdash;stay tuned for this to be deployed onto the Google Chrome store and check out GitHub to see the latest additions!`,
	},
	{
		projectNo: 3,
		name: 'GRAY STOPPER',
		img: GS,
		link1: 'VISIT',
		link1URL: 'https://gray-stopper.herokuapp.com/',
		link2: 'GITHUB',
		link2URL: 'https://github.com/Gray-Stopper/grace-shopper',
		description:
			'A mock ecommerce website selling hair products, created by myself and a team of pun-loving developers as part of The Grace Hopper program. Beneath the whimsical images and humorous product categories lies a fully functional site, featuring Etsy-inspired stock-checks when a user checks out, and a secured admin dashboard to replenish stock and add new products.',
	},
];

const Projects = () => {
	return (
		<section id="projects" className="green">
			<h2>PROJECTS</h2>
			<div className="flex-vertical">
				{projectList.map((project) => (
					<SingleProject key={project.projectNo} info={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
