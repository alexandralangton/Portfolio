import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Root = () => {
	return (
		<>
			<main>
				<Navbar />
				<About />
				<Projects />
				<section id="experience">
					<h2>EXPERIENCE</h2>
				</section>
				<Contact />
			</main>
			<footer className="blue">
				<small>&#169; 2020 Alexandra Langton. All Rights Reserved.</small>
			</footer>
		</>
	);
};

export default Root;
