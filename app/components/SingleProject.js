import React, { Children } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true });

const SingleProject = (props) => {
	const {
		name,
		img,
		imgSmall,
		techStack,
		link1,
		link2,
		link1URL,
		link2URL,
	} = props.info;
	let description = props.info.description.split('\n');
	return (
		<div className="project flex">
			<div className="project-img-box">
				{img.match(/\.mp4$/) ? (
					<video
						autoPlay
						muted
						loop
						className="project-img"
						id={name}
						data-aos="zoom-in-up"
						data-aos-duration="1000"
					>
						<source src={img} type="video/mp4" />
					</video>
				) : (
					<img
						srcSet={`${imgSmall ? imgSmall : img} 300w, ${img} 600w`}
						src={img}
						className="project-img"
						alt={`A screenshot of ${name}`}
						data-aos="zoom-in-up"
						data-aos-duration="1000"
						id={`${name}-image`}
					/>
				)}
			</div>
			<div className="project-text white">
				<h2 className="project-title">{name.toUpperCase()}</h2>
				{Children.map(description, (para) => {
					return <p className="project-description">{para}</p>;
				})}
				<p className="tech">
					<span className="tech-stack">
						<b>TECH STACK: </b>
					</span>
					{techStack}
				</p>
				<div className="flex wrap">
					<a href={link1URL} target="_blank" rel="noopener noreferrer">
						<span className="project-link">{link1.toUpperCase()}</span>
					</a>
					{link2 && (
						<a href={link2URL} target="_blank" rel="noopener noreferrer">
							<span className="project-link">{link2.toUpperCase()}</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
