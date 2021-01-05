import React from 'react';
import Contact from './Contact';

const Footer = () => {
	return (
		<footer id="hello" className="green">
			<Contact />
			<div className="full flex">
				<small>&#169; 2021 Alexandra Langton. All Rights Reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
