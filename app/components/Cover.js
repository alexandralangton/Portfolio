import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
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
	const container = useRef(null);

	useEffect(() => {
		const rotateText = setInterval(() => {
			setSubHeader(subHeaders[idx]);
			++idx;
		}, 1500);
		setTimeout(() => clearInterval(rotateText), 7500);
		setTimeout(() => revealImages(true), 9000);
	}, []);

	useLayoutEffect(() => {
		const bottomPosition = container.current.getBoundingClientRect().bottom;
		const onScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			if (bottomPosition * 2 < scrollPosition) {
				console.log('scroll pos: ', scrollPosition);
				props.setScroll(true);
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<section id="cover-container" ref={container}>
			<img
				src={woods}
				id="cover-pic"
				alt="Alexandra walking in the woods"
				onScroll={() => {
					console.log('you scrolled!');
					props.setScroll(true);
				}}
			/>
			<h1 className="cover name">ALEXANDRA LANGTON</h1>
			<h2 className="cover subheader">{subHeader}</h2>
			{showImages && (
				<div>
					<div className="cover icons">
						<Contact />
					</div>
					<div className="cover arrow-flex">
						<Link
							to="intro"
							smooth={true}
							spy={true}
							offset={-60}
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
