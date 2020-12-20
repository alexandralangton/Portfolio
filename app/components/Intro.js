import React from 'react';

const Intro = () => {
	return (
		<section id="intro">
			<div id="intro-cont">
				<h2 id="intro-head">
					Hello! I'm Alexandra Langton, a fullstack software developer based in
					New&nbsp;York&nbsp;City.
				</h2>
			</div>
			<div id="intro-blurb">
				<p className="max-size">
					A current Teaching Fellow at and recent graduate from{' '}
					<b>
						<a href="https://www.gracehopper.com/">The Grace Hopper Program</a>
					</b>{' '}
					at Fullstack Academy&mdash;a fast-paced 18 week immersive coding
					bootcamp.
				</p>
				<p className="max-size">
					At The Grace Hopper Program I learned the fundamentals of fullstack
					web development, focusing on <b>PostgreSQL</b>, <b>Express</b>,{' '}
					<b>React</b>, <b>Redux</b>, and <b>Node.js</b>. There is so much I
					want to learn and build, and I can't wait to explore new languages and
					technologies.
				</p>
			</div>
		</section>
	);
};

export default Intro;
