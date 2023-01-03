import Image from 'next/image'
import styles from './underlined-header.module.css'

export default function UnderlinedHeader({ children }) {
	return (
		<div className={styles.underlinedHeader}>
			{children}
		</div>
	)
}