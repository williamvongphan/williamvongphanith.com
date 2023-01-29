import React from 'react';
import styles from './project-item.module.css';
import { Text, Badge, Collapse, Link } from "@nextui-org/react";
import Image from 'next/image';

export default function ProjectItem({ name, description, tags, stack, link, image }) {
	return (
		<div className={styles.projectItem + " flex flex-col justify-between my-4 p-4 bg-base-200 rounded-md"}>
			<div className={styles.projectItemHeader}>
				<Link
					href={link}
					color={"primary"}
				>
						<span className={styles.projectItemName + " font-sans m-0 text-4xl font-bold"}>
							{name}
						</span>
						<span p className={"m-2 font-sans"}>
							Click to view project
						</span>
				</Link>
				<div
					className={styles.projectItemTags + " flex flex-row flex-wrap gap-2 my-2"}
				>
					{tags.map((tag, index) => (
						<Badge
							key={index}
							color={"primary"}
							className={styles.projectItemTag}
						>
							{tag}
						</Badge>
					))}
				</div>
			</div>
			<div>
				<Text
					p
					className={styles.projectItemDescription + " font-sans"}
				>
					{description}
				</Text>
			</div>
			<div className={styles.projectItemStack}>
				<Collapse.Group>
					{Object.keys(stack).map((category, index) => (
						<Collapse
							key={index}
							title={category}
							className={styles.fontSans}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
								{stack[category].map((technology, index) => (
									<Text
										key={index}
										p
										className={styles.projectItemTechnology}
									>
										{technology}
									</Text>
								))}
							</div>
						</Collapse>
					))}
				</Collapse.Group>
			</div>
			<div className={styles.projectItemLink}>
				<a
					href={
						link
					}
					target="_blank"
					rel="noreferrer"
				>
				</a>
			</div>
			<div className={styles.projectItemImage}>
				<Image
					src={image}
					alt={name}
					width={1000}
					height={600}
					className={styles.projectItemImage + " m-auto"}
				/>
			</div>
		</div>
	)
};

