import GS from '../media/images/GS.png';
import GS2 from '../media/images/GS2.png';
import chromeExtensionDemo from '../media/videos/chromeExtensionDemo.mp4';
import ab from '../media/images/AB.png';
import ab2 from '../media/images/AB2.png';
import site from '../media/images/site.png';

// \nCurrently under development\u2014check out GitHub to see the latest enhancements!

const projectList = [
	{
		projectNo: 1,
		name: 'accountabee',
		img: ab,
		imgSmall: ab2,
		link1: 'video demo',
		link1URL:
			'https://www.youtube.com/watch?v=FPdc90aeMHg&list=PLx0iOsdUOUmlk2heasTPCfEM8cj3BD8VS&index=5',
		link2: 'github',
		link2URL: 'https://github.com/AccountaBee/AccountaBee_Frontend',
		description:
			'AccountaBee is a social goal-tracking mobile app, which lets users set weekly goals with their friends and keep each other socially accountable. AccountaBee was developed as part of a team over a two week sprint, and was an enjoyable way to explore the technical challenges of creating a social network from an organizational perspective. \nI developed features including the goal setting pages and animated goals dashboard, along with the app navigational set up.',
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
		description: `Inspired by my experiences as a British person navigating an American kitchen, this Google Chrome Extension translates websites from American into British English, checking a dictionary I compiled of over 400 terms and phrases and inserting conversion pop-ups for common measurements.`,
		techStack:
			'JavaScript, with some support from the Oxford English Dictionary',
	},
	{
		projectNo: 3,
		name: 'gray stopper',
		img: GS,
		imgSmall: GS2,
		link1: 'visit',
		link1URL: 'https://gray-stopper.herokuapp.com/',
		link2: 'github',
		link2URL: 'https://github.com/Gray-Stopper/grace-shopper',
		description:
			'A mock ecommerce website selling hair products, created by myself and two other pun-loving developers as part of The Grace Hopper Program. Beneath the whimsical images and humorous product categories lies a fully functional site, featuring Etsy-inspired stock checks when a user completes a purchase, and a secured admin dashboard to adjust stock levels, add new products, and manage site users.\nI tackled vertical slices of the site including the shopping cart, home page and the secured admin dashboard.',
		techStack:
			'JavaScript | React | Redux | Node.js | Express | PostgreSQL | Sequelize | Heroku',
	},
	{
		projectNo: 4,
		name: 'this website',
		img: site,
		link1: 'github',
		link1URL: 'https://github.com/alexandralangton/Portfolio',
		link2: null,
		link2URL: null,
		description: `Meta, I know. This portfolio was designed and built from scratch by myself, with no boilerplate starter code or design templates used. The site was built with React, using functional components and hooks.\nIf you'd like to have a look at the source code, you can see this on my GitHub. I would welcome any feedback!`,
		techStack:
			'JavaScript | React | HTML | CSS | Webpack | AWS S3 | AWS CloudFront',
	},
];

export default projectList;
