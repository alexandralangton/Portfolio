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
					<video autoPlay muted loop className="project-img">
						<source src={img} type="video/mp4" />
					</video>
				) : (
					<img src={img} className="project-img" />
				)}
			</div>
			<div className="project-text white">
				<h4 className="project-title">{name}</h4>
				<br />
				{description.split('\n').map((para, idx) => (
					// idx used as key as there is no unique numerical information here
					<p className="project-description" key={idx}>
						{para}
					</p>
				))}
				<p className="tech">
					<span className="tech-stack">TECH STACK: </span>
					{techStack}
				</p>
				<div className="flex">
					<a href={link1URL} target="_blank" rel="noopener noreferrer">
						<span className="project-link">{link1}</span>
					</a>
					{link2 && (
						<a href={link2URL} target="_blank" rel="noopener noreferrer">
							<span className="project-link">{link2}</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
