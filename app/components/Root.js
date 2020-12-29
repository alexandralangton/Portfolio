import React, { useState } from 'react';
import Navbar from './Navbar';
import Cover from './Cover';
import Intro from './Intro';
import About from './About';
import TechStack from './TechStack';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';

const Root = () => {
	const [hasScrolled, setScroll] = useState(false);
	return (
		<>
			{hasScrolled && <Navbar />}
			<Cover setScroll={setScroll} scrolled={hasScrolled} />
			<main>
				<Intro />
				<About />
				<TechStack />
				<Projects />
				<Experience />
			</main>
			<Footer />
		</>
	);
};

export default Root;
