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
		<>
			<div id="about-container">
				<img src={woods} id="cover-pic" alt="Alexandra walking in the woods" />
				<h1 className="cover name">ALEXANDRA LANGTON</h1>
				<h3 className="cover subheader">{subHeader}</h3>
				<button
					type="button"
					className="scroll"
					onClick={() => props.setScroll(true)}
				>
					LEARN MORE
				</button>
			</div>
			<div id="temp">
				<h1 style={{ marginTop: 0 }}>Nice to meet you!</h1>
				<p style={{ textAlign: 'center' }}>
					Lorem ipsum blah blah prentend I'm a paragraph, hi I'm Alex I like JS
					and CSS and sometimes even some SQL. I used to like languages but I
					got bored. ETC ETrkjglj kwrltk lkyt lk4yjlk lwky klwyk l4kyl4k 4lyk3l
					k3yl.
				</p>
			</div>
		</>
	);
};

export default Cover;
