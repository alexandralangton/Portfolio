import React, { useState } from 'react';
import LinkedIn from '../images/LinkedIn.png';
import LinkedInOrange from '../images/LinkedInOrange.png';
import Email from '../images/Email.png';
import EmailOrange from '../images/EmailOrange.png';
import GitHub from '../images/GitHub.png';
import GitHubOrange from '../images/GitHubOrange.png';

const Contact = () => {
	const [ghSrc, setGhSrc] = useState(GitHub);
	const [liSrc, setLiSrc] = useState(LinkedIn);
	const [emSrc, setEmSrc] = useState(Email);

	return (
		<section id="hello" className="blue">
			<h2>GET IN TOUCH</h2>
			<div className="flex middle">
				<div id="contact-blurb">
					<p>
						Like what you see? Say hello! <br /> I'm available for full time
						roles, as well as freelance projects and collaborations.
					</p>
				</div>
				<div id="contact-links">
					<a href="mailto:alexandra.langton@outlook.com?subject=Hello!">
						<img
							src={emSrc}
							onMouseEnter={() => setEmSrc(EmailOrange)}
							onMouseLeave={() => setEmSrc(Email)}
							className="logo"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/alexandralangton/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={liSrc}
							onMouseEnter={() => setLiSrc(LinkedInOrange)}
							onMouseLeave={() => setLiSrc(LinkedIn)}
							className="logo"
						/>
					</a>
					<a
						href="https://github.com/alexandralangton"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={ghSrc}
							onMouseEnter={() => setGhSrc(GitHubOrange)}
							onMouseLeave={() => setGhSrc(GitHub)}
							className="logo"
						/>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
