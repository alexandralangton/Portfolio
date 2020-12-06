import React from 'react';
import Navbar from './Navbar';
import al from '../../public/al.jpeg';

const Root = () => {
	return (
		<main>
			<nav>
				<Navbar />
			</nav>
			<header>
				<h1>ALEXANDRA LANGTON</h1>
			</header>
			<section id="about">
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
							After studing languages at university I worked for several years
							as a project manager, working on international adaptations and
							rollouts of multi-lingual marketing campaigns, most recently
							including a series of HTML and JavaScript-based eLearning courses.
							As I worked with engineers on these adaptations, I came to the
							conclusion I wanted to work on this type of project in a more
							hands on way, and dedicate my attention to detail and creative
							flair to personally building great content in code.
							<br />
							<br />
							To that end, I started teaching myself to code, and recently
							graduated from The Grace Hopper Program's fulltime immersive web
							development coding bootcamp.
							<br />
							<br />
							I'm currently looking for a full time role as a developer. Until
							then I will keep doing what I love&mdash;writing well organized,
							clean code that solves real world problems.
						</p>
					</div>
				</div>
			</section>
			<section id="projects">
				<h3>My projects</h3>
			</section>
			<section id="experience">
				<h3>Experience</h3>
			</section>
			<section id="contact">
				<h3>Get in touch</h3>
			</section>
		</main>
	);
};

export default Root;
