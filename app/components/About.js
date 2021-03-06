import React from 'react';
import al from '../media/images/al.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true });

const About = () => {
	return (
		<section id="about">
			<div className="flex me">
				<div id="size-limit">
					<div
						className="flex-vertical about-pic"
						id="pic-stripes"
						data-aos="flip-left"
						data-aos-offset="300"
						data-aos-duration="1000"
					>
						<img src={al} alt="Alexandra in Seattle" id="profile-pic" />
					</div>
				</div>
				<div
					id="bio"
					data-aos="fade-up"
					data-aos-offset="300"
					data-aos-duration="1000"
				>
					<h1 className="right-align">ABOUT ME</h1>
					<p>
						After studying languages at university I worked for several years as
						a project manager, working on international adaptations and rollouts
						of multi-lingual marketing campaigns&mdash;most recently including a
						series of HTML and JavaScript-based projects. As I worked with
						engineers on these adaptations, I came to the conclusion I wanted to
						work on this type of project in a more hands on way, and dedicate my
						creative problem-solving skills and attention to detail to
						personally building great content in code.
					</p>
					<p>
						Originally hailing from England, I moved to New York four years ago.
						When I'm not coding you'll find me riding my bicycle around Prospect
						Park, at the climbing wall working on my fear of heights and hoping
						to one day conquer lead climbing, or at home with my cat reading a
						book.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
