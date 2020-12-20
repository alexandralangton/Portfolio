import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Cover from './Cover';

const Root = () => {
	const [hasScrolled, setScroll] = useState(false);
	return (
		<>
			<main>
				{hasScrolled && <Navbar />}
				<Cover setScroll={setScroll} />
				<About />
				<Projects />
				<section id="experience">
					<h2>EXPERIENCE</h2>
				</section>
			</main>
			<Contact />
		</>
	);
};

export default Root;
