import React from 'react';
import TechStackCol from './TechStackCol';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true });

const tech = [
	'JavaScript',
	'Python',
	'SQL',
	'Google Cloud Platform',
	'Docker',
	'Node.js',
	'Express',
	'PostgreSQL',
	'Webpack',
	'Babel',
	'Puppeteer',
	'AWS S3',
	'AWS CloudFront',
	'React Native',
	'React',
	'Redux',
	'HTML',
	'CSS',
	'Mocha',
	'Chai',
	'Jasmine',
	'Git and GitHub',
];

const TechStack = () => {
	return (
		<section id="tech-stack" className="green">
			<div className="inline-flex full">
				<div id="tech-blurb">
					<div
						className="border"
						data-aos="fade-up"
						data-aos-offset="400"
						data-aos-duration="1000"
					>
						<h1 id="tech-head">TECH STACK</h1>
						<p className="tech-p">
							The technologies and tools I know and love:
						</p>
						<div className="tech-flex">
							<TechStackCol technology={tech.slice(0, tech.length / 2)} />
							<TechStackCol technology={tech.slice(tech.length / 2)} />
						</div>
					</div>
					<div id="tech-pic" />
				</div>
			</div>
		</section>
	);
};

export default TechStack;
