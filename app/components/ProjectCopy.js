import GS from '../media/GS.png';
import chromeExtensionDemo from '../media/chromeExtensionDemo.mp4';
import AB from '../media/AB.mp4';
import site from '../media/site.png';

const projectList = [
	{
		projectNo: 1,
		name: 'accountabee',
		img: AB,
		link1: 'video demo',
		link1URL:
			'https://www.youtube.com/watch?v=FPdc90aeMHg&list=PLx0iOsdUOUmlk2heasTPCfEM8cj3BD8VS&index=5',
		link2: 'github',
		link2URL: 'https://github.com/AccountaBee/AccountaBee_Frontend',
		description:
			'AccountaBee is a social goal-tracking mobile app, which lets users set weekly goals with their friends and keep each other socially accountable. AccountaBee was developed as part of a team over a two week sprint, and was an enjoyable way to explore the technical challenges of creating a social network from an organizational perspective. \nI developed features including the goal setting pages, goal visualization dashboard and user profile page, along with the app navigational set up.',
		techStack:
			'JavaScript | React Native | Redux | Node.js | Expo | Firebase | Express | PostgreSQL | Sequelize | Heroku',
	},
	{
		projectNo: 2,
		name: 'english website localizer',
		img: chromeExtensionDemo,
		link1: 'github',
		link1URL: 'https://github.com/alexandralangton/UKEN-Chrome-Extension',
		link2: null,
		link2URL: null,
		description: `Inspired by my experiences as a British person navigating an American kitchen, this Google Chrome Extension translates websites from American into British English, checking a dictionary I compiled of over 400 terms and phrases and inserting conversion pop-ups for common measurements. \nCurrently under development\u2014check out GitHub to see the latest enhancements!`,
		techStack:
			'JavaScript, with some support from the Oxford English Dictionary',
	},
	{
		projectNo: 3,
		name: 'gray stopper',
		img: GS,
		link1: 'visit',
		link1URL: 'https://gray-stopper.herokuapp.com/',
		link2: 'github',
		link2URL: 'https://github.com/Gray-Stopper/grace-shopper',
		description:
			'A mock ecommerce website selling hair products, created by myself and two other pun-loving developers as part of The Grace Hopper program. Beneath the whimsical images and humorous product categories lies a fully functional site, featuring Etsy-inspired stock-checks when a user checks out, and a secured admin dashboard to manage stock levels, add new products, and manage site users.\nI tackled vertical slices of the site including the user cart and the secured admin dashboard.',
		techStack:
			'JavaScript | React | Redux | Expo | Firebase | Node.js | Express | PostgreSQL | Sequelize | Heroku',
	},
	{
		projectNo: 4,
		name: 'this website',
		img: site,
		link1: 'github',
		link1URL: 'https://github.com/alexandralangton/Portfolio',
		link2: null,
		link2URL: null,
		description: `Meta, I know. This portfolio was designed and built from scratch by myself, with no boilerplate starter code, design templates or style libraries used. The site was built with React, using functional components and hooks.\nIf you'd like to have a look at the source code, you can see this on my GitHub. I would welcome any feedback!`,
		techStack: 'JavaScript | React | HTML | CSS | Webpack',
	},
];

export default projectList;
