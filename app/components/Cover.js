import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import woods from '../media/images/woods.jpg';
import woods2 from '../media/images/woods2.jpg';
import whiteChevron from '../media/images/whiteChevron.png';
import Contact from './Contact';

let subHeaders = [
	'software engineer',
	'project manager',
	'linguist',
	'oxford comma fan',
	'life-long learner',
];
let idx = 0;

const Cover = (props) => {
	const [name, showName] = useState(false);
	const [innerHeight, setInnerHeight] = useState(window.innerHeight);
	const [outerHeight] = useState(window.outerHeight);
	const [subHeader, setSubHeader] = useState('');
	const [showArrow, revealArrow] = useState(true);
	const [showImages, revealImages] = useState(false);
	const container = useRef(null);

	const textReel = () => {
		const rotateText = setInterval(() => {
			setSubHeader(subHeaders[idx].toUpperCase());
			++idx;
		}, 1500);
		setTimeout(() => clearInterval(rotateText), 8000);
		setTimeout(() => revealImages(true), 9000);
	};

	useEffect(() => {
		console.log(
			`Hello! If you're looking for a software engineer, I'd love to learn more about any available roles you have. My email is alexandra.langton@outlook.com. Thanks!`
		);

		const handleResize = () => {
			if (window.outerHeight !== outerHeight) {
				setInnerHeight(window.innerHeight);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useLayoutEffect(() => {
		const bottomPosition = container.current.getBoundingClientRect().bottom;
		const onScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			if (bottomPosition * 2 < scrollPosition) {
				props.setScroll(true);
				revealArrow(false);
				setSubHeader(subHeaders[0]);
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<section id="cover-container" ref={container}>
			<img
				srcSet={`${woods2} 300w, ${woods} 600w`}
				src={woods}
				id="cover-pic"
				style={{ height: innerHeight }}
				onLoad={() => {
					showName(true);
					textReel();
				}}
				onScroll={() => {
					props.setScroll(true);
				}}
			/>
			<div className="flex full">
				{name && <h1 className="cover name">ALEXANDRA LANGTON</h1>}
			</div>
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
									setTimeout(() => setSubHeader(subHeaders[0]), 750);
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
