import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Cover from './Cover';
import Intro from './Intro';

const Root = () => {
	const [hasScrolled, setScroll] = useState(false);
	return (
		<>
			{hasScrolled && <Navbar />}
			<Cover setScroll={setScroll} scrolled={hasScrolled} />
			<main>
				<Intro />
				<About />
				<Projects />
				<section id="experience">
					<h2>EXPERIENCE</h2>
				</section>
			</main>
			<footer id="hello" className="green">
				<Contact />
				<small>&#169; 2020 Alexandra Langton. All Rights Reserved.</small>
			</footer>
		</>
	);
};

export default Root;
