import React from 'react';
import LinkedIn from '../images/LinkedIn.png';
import Email from '../images/Email.png';
import GitHub from '../images/GitHub.png';

const Contact = () => {
	return (
		<section id="hello" className="blue">
			<h2>GET IN TOUCH</h2>
			<div className="flex middle">
				<div id="contact-blurb">
					<p>
						Like what you see? Say hello! <br /> I'm available for full time and
						freelance projects and collaborations.
					</p>
				</div>
				<div id="contact-links">
					<a href="mailto:alexandra.langton@outlook.com?subject=Hello!">
						<img src={Email} className="logo" />
					</a>
					<a
						href="https://www.linkedin.com/in/alexandralangton/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={LinkedIn} className="logo" />
					</a>
					<a
						href="https://github.com/alexandralangton"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={GitHub} className="logo" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
