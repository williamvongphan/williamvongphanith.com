// Language Item group
// This is the item group that contains the language items

import React from 'react';
import styles from './project-item-group.module.css';
import ProjectItem from './ProjectItem';
import {Text, Collapse} from "@nextui-org/react";

export default function LanguageItemGroup({ title, projects: projects }) {
	return (
		<div className={styles.projectItemGroup}>
			<Text
				h2
				className={styles.projectItemGroupTitle}
			>
				{title}
			</Text>
			<Collapse.Group className="">
				{projects.map((project, index) => (
					<Collapse
						key={index}
						title={project.name}
						className={styles.fontSans}
					>
						<ProjectItem
							name={project.name}
							description={project.description}
							tags={project.tags}
							stack={project.stack}
							link={project.link}
							image={project.image}
							key={project.name}
						/>
					</Collapse>
				))}
			</Collapse.Group>
		</div>
	)
};