// Section component
// This component is used to create a section of the page

import React from 'react';
import styles from './section.module.css';

export default function Section({ name, children }) {
	return (
		// The idea is that the section will render normally, but the name will be mostly transparent and appear in the background (like a watermark) and also serve as an anchor for the section
		<div className={styles.section} id={name}>
			<div className={styles.sectionName}>{name}</div>
			<div className={styles.sectionContent}>
				{children}
			</div>
		</div>
	)
}