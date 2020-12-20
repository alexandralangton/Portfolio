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
		<footer id="hello" className="blue">
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
			<small>&#169; 2020 Alexandra Langton. All Rights Reserved.</small>
		</footer>
	);
};

export default Contact;
