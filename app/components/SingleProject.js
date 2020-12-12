import React from 'react';

const SingleProject = (props) => {
	const { name, img, description } = props.info;
	return (
		<div className="project flex">
			<div>
				<img src={img} className="project-img" />
			</div>
			<div>
				{name}
				<br />
				<p>{description}</p>
			</div>
		</div>
	);
};

export default SingleProject;
