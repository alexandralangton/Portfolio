import React, { useEffect, useState } from 'react';
import woods from '../images/woods.jpg';
import { Link } from 'react-scroll';
import whiteChevron from '../images/whiteChevron.png';
import Contact from './Contact';

let subHeaders = [
	'PROJECT MANAGER',
	'LINGUIST',
	'OXFORD COMMA FAN',
	'LIFE-LONG LEARNER',
	'SOFTWARE DEVELOPER',
];
let idx = 0;

const Cover = (props) => {
	const [subHeader, setSubHeader] = useState('');
	const [showImages, revealImages] = useState(false);

	useEffect(() => {
		const rotateText = setInterval(() => {
			setSubHeader(subHeaders[idx]);
			++idx;
		}, 1500);
		setTimeout(() => clearInterval(rotateText), 7500);
		setTimeout(() => revealImages(true), 9000);
	}, []);

	return (
		<section id="cover-container">
			<img src={woods} id="cover-pic" alt="Alexandra walking in the woods" />
			<h1 className="cover name">ALEXANDRA LANGTON</h1>
			<h2 className="cover subheader">{subHeader}</h2>
			{showImages && (
				<div>
					<div className="cover icons">
						<Contact />
					</div>
					<div className="cover arrow-flex">
						<Link
							to="about"
							smooth={true}
							spy={true}
							onClick={() => props.setScroll(true)}
							activeClass="active"
						>
							<img src={whiteChevron} className="arrow pulse" />
						</Link>
					</div>
				</div>
			)}
		</section>
	);
};

export default Cover;
