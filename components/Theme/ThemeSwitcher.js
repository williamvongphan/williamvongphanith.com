// Theme Switcher button

import React from 'react';
import styles from './theme-switcher.module.css';
import {Switch} from "@nextui-org/react";
import {useTheme} from "next-themes";
import Moon from '../../public/img/icon/moon.svg';
import Sun from '../../public/img/icon/sun.svg';

export default function ThemeSwitcher() {
	const {theme, setTheme} = useTheme();
	React.useEffect(() => {
		// Get theme from system if possible
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		// Set theme to system theme if theme is not set
		if (theme === 'system') {
			setTheme(systemTheme);
		}
	}, [theme, setTheme]);
	return (
		<div className={styles.themeSwitcher}>
			<Switch
				className={styles.themeSwitcherSwitch}
				checked={theme === "dark"}
				iconOn={<Moon className={styles.switcherIcon}/>}
				iconOff={<Sun className={styles.switcherIcon}/>}
				onChange={() => {
					setTheme(theme === "dark" ? "light" : "dark");
				}}
			/>
		</div>
	);
}