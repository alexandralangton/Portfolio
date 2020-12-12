import React from 'react';
import al from '../images/al.jpeg';

const About = () => {
	return (
		<section id="about">
			<header>
				<h1>ALEXANDRA LANGTON</h1>
			</header>
			<div className="flex">
				<img
					src={al}
					alt="A picture of Alexandra Langton in Seattle"
					id="profile-pic"
				/>
				<div id="bio">
					<h3>
						Hello! I'm Alexandra Langton, a fullstack software developer based
						in New York City.
					</h3>
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
						To that end, I started teaching myself to code, and recently
						graduated from The Grace Hopper Program's fulltime immersive web
						development coding bootcamp.
					</p>
					<p>
						I'm currently looking for a full time role as a developer. Until
						then I will keep doing what I love&mdash;writing well organized,
						clean code that solves real world problems.
					</p>
				</div>
			</div>
			{/* <div id="techstack">
				<h3>I like to play with these:</h3>
			</div> */}
		</section>
	);
};

export default About;
