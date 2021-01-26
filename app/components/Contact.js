import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMediumM,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
	return (
		<div id="contact-links">
			<a
				href="mailto:alexandra.langton@outlook.com?subject=Hello!"
				aria-label="send Alexandra an email"
			>
				<FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
			</a>
			<a
				href="https://www.linkedin.com/in/alexandralangton/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="visit Alexandra's LinkedIn page"
			>
				<FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
			</a>
			<a
				href="https://github.com/alexandralangton"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="visit Alexandra's GitHub"
			>
				<FontAwesomeIcon icon={faGithub} className="contact-icon" />
			</a>
			<a
				href="https://alexandra-langton.medium.com/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="visit Alexandra's Medium page"
			>
				<FontAwesomeIcon icon={faMediumM} className="contact-icon" />
			</a>
		</div>
	);
};

export default Contact;
