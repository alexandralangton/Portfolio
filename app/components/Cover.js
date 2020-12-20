import React, { useEffect, useState } from 'react';
import woods from '../images/woods.jpg';

let subHeaders = [
	'PROJECT MANAGER',
	'LINGUIST',
	'OXFORD COMMA FAN',
	'LIFE LONG LEARNER',
	'SOFTWARE DEVELOPER',
];
let idx = -1;

const Cover = (props) => {
	const [subHeader, setSubHeader] = useState('');

	useEffect(() => {
		const rotateText = setInterval(() => {
			setSubHeader(subHeaders[idx]);
			++idx;
		}, 1500);
		setTimeout(() => clearInterval(rotateText), 9000);
	}, []);

	return (
		<div id="about-container">
			<img src={woods} id="cover-pic" alt="Alexandra walking in the woods" />
			<h1 className="cover name">ALEXANDRA LANGTON</h1>
			<h3 className="cover subheader">{subHeader}</h3>
			<button type="button" onClick={() => props.setScroll(true)}>
				Click me!
			</button>
		</div>
	);
};

export default Cover;
