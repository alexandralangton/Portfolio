import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import woods from '../media/woods.jpg';
import { Link } from 'react-scroll';
import whiteChevron from '../media/whiteChevron.png';
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
	const [showArrow, revealArrow] = useState(true);
	const [showImages, revealImages] = useState(false);
	const container = useRef(null);

	useEffect(() => {
		console.log(
			`Hello! If you're looking for a software developer, I'd love to learn more about any available roles! My email is alexandra.langton@outlook.com. Thanks!`
		);
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
				props.setScroll(true);
				revealArrow(false);
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
					{showArrow && (
						<div className="cover arrow-flex">
							<Link
								to="intro"
								smooth={true}
								spy={true}
								offset={-60}
								onClick={() => {
									props.setScroll(true);
									revealArrow(false);
								}}
								activeClass="active"
							>
								<img src={whiteChevron} className="arrow pulse" />
							</Link>
						</div>
					)}
				</div>
			)}
		</section>
	);
};

export default Cover;
