import React, { Children } from 'react';

const TechStackCol = ({ technology }) => {
	return (
		<div className="tech-col">
			<ul className="tech-ul">
				{Children.map(technology, (tech) => (
					<li>{tech}</li>
				))}
			</ul>
		</div>
	);
};

export default TechStackCol;
