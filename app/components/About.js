import React from 'react';
import al from '../media/al.jpeg';

const About = () => {
	return (
		<section id="about">
			<div className="flex me">
				<div id="size-limit">
					<div className="flex-vertical about-pic" id="pic-stripes">
						<img
							src={al}
							alt="A picture of Alexandra Langton in Seattle"
							id="profile-pic"
						/>
					</div>
				</div>
				<div id="bio">
					<h1 className="right-align">ABOUT ME</h1>
					<p>
						After studying languages at university I worked for several years as
						a project manager, working on international adaptations and rollouts
						of multi-lingual marketing campaigns&mdash;most recently including a
						series of HTML and JavaScript-based eLearning courses. As I worked
						with engineers on these adaptations, I came to the conclusion I
						wanted to work on this type of project in a more hands on way, and
						dedicate my attention to detail and creative problem-solving skills
						to personally building great content in code.
					</p>
					<p>
						Originally hailing from England, I moved to New York four years ago.
						When I'm not coding you'll find me riding my bicycle around Prospect
						Park, at the climbing wall working on my fear of heights and hoping
						to one day conquer lead climbing, or just curled up at home with my
						cat and a hot chocolate reading a book.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
