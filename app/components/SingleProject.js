import React from 'react';

const SingleProject = (props) => {
	const {
		name,
		img,
		description,
		techStack,
		link1,
		link2,
		link1URL,
		link2URL,
	} = props.info;

	return (
		<div className="project flex">
			<div className="project-img-box">
				{img.match(/\.mp4$/) ? (
					<video autoPlay muted loop className="project-img" id={name}>
						<source src={img} type="video/mp4" />
					</video>
				) : (
					<img
						src={img}
						className="project-img"
						alt={`A screenshot of ${name}`}
					/>
				)}
			</div>
			<div className="project-text white">
				<h4 className="project-title">{name.toUpperCase()}</h4>
				{description.split('\n').map((para, idx) => (
					<p className="project-description" key={idx}>
						{para}
					</p>
				))}
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
