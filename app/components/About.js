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
						a project manager, working on international adaptations and launches
						of multi-lingual marketing campaigns. As I worked with engineers on
						these adaptations, I realized I wanted to expand my skillset and
						work on this type of project in a more hands on way.
					</p>
					<p>
						To that end I attended{' '}
						<b>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.gracehopper.com/"
							>
								The Grace Hopper Program
							</a>
						</b>{' '}
						at Fullstack Academy&mdash;a fast-paced 17 week immersive coding
						bootcamp where I learned the fundamentals of fullstack web
						development, focusing on the PERN stack. I find programming every
						bit as rewarding as I had hoped, and I love the problem solving and
						creativity my work involves. I'm excited to see where my career as a
						software engineer will take me and what I will build along the way.
					</p>
					<p>
						Originally hailing from England, I moved to New York five years ago.
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
