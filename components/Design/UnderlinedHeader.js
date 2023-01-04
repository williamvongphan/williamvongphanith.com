import styles from './underlined-header.module.css'
import { Text } from "@nextui-org/react";
import AnchorIcon from '../../public/img/icon/anchor.svg'


export default function UnderlinedHeader({ children, anchor }) {
	// Make it so that when you click the link, it will scroll to the section and copies the anchor to the clipboard
	return (
		<div className={styles.underlinedHeader}>
			<a href={`#${anchor}`}
				className={styles.underlinedHeaderLink}
				onClick={(e) => {
					e.preventDefault();
					// Set URL to the anchor
					window.history.pushState(null, null, `#${anchor}`);
					document.getElementById(anchor).scrollIntoView({ behavior: 'smooth' });
				}}
				onMouseEnter={(e) => {
					e.preventDefault();
					// Show the anchor icon
					document.getElementById(anchor + "-icon").classList.remove("hidden");
					document.getElementById(anchor + "-icon").classList.add("inline-block");
				}}
				onMouseLeave={(e) => {
					e.preventDefault();
					// Hide the anchor icon
					document.getElementById(anchor + "-icon").classList.remove("inline-block");
					document.getElementById(anchor + "-icon").classList.add("hidden");
				}}
				 id={anchor}
			>
				<Text
					h1
				>
					{children}
					<AnchorIcon
						className={styles.underlinedHeaderIcon + " hidden ml-4"}
						id={anchor + "-icon"}
					/>
				</Text>
			</a>
		</div>
	)
}