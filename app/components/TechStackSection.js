import React from 'react';
import TechStackCol from './TechStackCol';

const TechStackSection = ({ name, tech }) => {
	return (
		<>
			<span className="tech-subhead top">{name.toUpperCase()}:</span>
			<div className="tech-flex">
				<TechStackCol technology={tech.slice(0, tech.length / 2)} />
				<TechStackCol technology={tech.slice(tech.length / 2)} />
			</div>
		</>
	);
};

export default TechStackSection;
