import React from 'react';

const TechStackCol = ({ technology }) => {
	return (
		<div className="tech-col">
			<ul className="tech-ul">
				{technology.map((tech, idx) => {
					return <li key={idx}>{tech}</li>;
				})}
			</ul>
		</div>
	);
};

export default TechStackCol;
