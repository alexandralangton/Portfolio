import React from 'react';

const SingleProject = (props) => {
	const {
		name,
		img,
		description,
		link1,
		link2,
		link1URL,
		link2URL,
	} = props.info;
	return (
		<div className="project flex">
			<div className="project-text">
				<img src={img} className="project-img" />
			</div>
			<div className="project-text">
				<h4 className="project-title">{name}</h4>
				<br />
				<p>{description}</p>
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
