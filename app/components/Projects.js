import React from 'react';
import SingleProject from './SingleProject';
import projectList from './ProjectCopy';

const Projects = () => {
	return (
		<section id="projects">
			<h1>PROJECTS</h1>
			<div className="flex-vertical">
				{projectList.map((project) => (
					<SingleProject key={project.projectNo} info={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
