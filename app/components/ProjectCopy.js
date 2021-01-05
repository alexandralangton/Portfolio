import GS2 from '../media/GS2.png';
import chromeExtensionDemo from '../media/chromeExtensionDemo.mp4';
import ab2 from '../media/ab2.png';
import site2 from '../media/site2.png';

const projectList = [
	{
		projectNo: 1,
		name: 'ACCOUNTABEE',
		img: ab2,
		link1: 'VIDEO DEMO',
		link1URL:
			'https://www.youtube.com/watch?v=FPdc90aeMHg&list=PLx0iOsdUOUmlk2heasTPCfEM8cj3BD8VS&index=5',
		link2: 'GITHUB',
		link2URL: 'https://github.com/AccountaBee/AccountaBee_Frontend',
		description:
			'AccountaBee is a social goal-tracking mobile app, which lets users set weekly goals with their friends and keep each other socially accountable. AccountaBee was developed as part of a team over a two week sprint, and was an enjoyable way to explore the technical challenges of creating a social network from an organizational perspective.',
		techStack:
			'JavaScript | React Native | Redux | Node.js | Expo | Firebase | Express | PostgreSQL | Sequelize | Heroku',
	},
	{
		projectNo: 2,
		name: 'ENGLISH WEBSITE LOCALIZER',
		img: chromeExtensionDemo,
		link1: 'GITHUB',
		link1URL: 'https://github.com/alexandralangton/UKEN-Chrome-Extension',
		link2: null,
		link2URL: null,
		description: `Inspired by my experiences as a British person navigating an American kitchen, this Google Chrome Extension translates websites from American into British English, checking a dictionary I compiled of over 400 terms and phrases and inserting conversion pop-ups for common measurements. \nCurrently under development\u2014stay tuned for this to be deployed onto the Google Chrome store and check out GitHub to see the latest enhancements!`,
		techStack:
			'JavaScript, with some support from the Oxford English Dictionary',
	},
	{
		projectNo: 3,
		name: 'GRAY STOPPER',
		img: GS2,
		link1: 'VISIT',
		link1URL: 'https://gray-stopper.herokuapp.com/',
		link2: 'GITHUB',
		link2URL: 'https://github.com/Gray-Stopper/grace-shopper',
		description:
			'A mock ecommerce website selling hair products, created by myself and a team of pun-loving developers as part of The Grace Hopper program. Beneath the whimsical images and humorous product categories lies a fully functional site, featuring Etsy-inspired stock-checks when a user checks out, and a secured admin dashboard to replenish stock and add new products.',
		techStack:
			'JavaScript | React | Redux | Expo | Firebase | Node.js | Express | PostgreSQL | Sequelize | Heroku',
	},
	{
		projectNo: 4,
		name: 'THIS WEBSITE',
		img: site2,
		link1: 'GITHUB',
		link1URL: 'https://github.com/alexandralangton/Portfolio',
		link2: null,
		link2URL: null,
		description: `Meta, I know. This portfolio was designed and built from scratch by myself, with no boilerplate starter code or design templates involved, using functional React components and hooks. If you'd like to have a look at the source code, you can see this on my GitHub!`,
		techStack: 'JavaScript | React | HTML | CSS | Webpack',
	},
];

export default projectList;
