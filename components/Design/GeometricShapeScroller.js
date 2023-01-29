import React from 'react';
import {useSpring, animated} from '@react-spring/web';

let ShapeHexagon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify"
				 viewBox="0 0 375 322.499991" height="430" preserveAspectRatio="xMidYMid meet" version="1.0">
			<defs>
				<clipPath id="9e39864dd0">
					<path d="M 0.289062 0 L 374.4375 0 L 374.4375 322 L 0.289062 322 Z M 0.289062 0 " clipRule="nonzero"/>
				</clipPath>
				<clipPath id="05d0b0a0bb">
					<path
						d="M 374.4375 161 L 280.832031 322 L 93.621094 322 L 0.0195312 161 L 93.621094 0 L 280.832031 0 L 374.4375 161 "
						clipRule="nonzero"/>
				</clipPath>
			</defs>
			<g clipPath="url(#9e39864dd0)">
				<g clipPath="url(#05d0b0a0bb)">
					<path strokeLinecap="butt" transform="matrix(0.748301, 0, 0, 0.748839, 0.0179481, 0.00137117)" fill="none"
								strokeLinejoin="miter"
								d="M 500.359477 214.997667 L 375.268831 429.997166 L 125.087541 429.997166 L 0.00211563 214.997667 L 125.087541 -0.00183105 L 375.268831 -0.00183105 L 500.359477 214.997667 "
								stroke="currentColor" strokeWidth="34" strokeOpacity="1" strokeMiterlimit="4"/>
				</g>
			</g>
		</svg>
	)
}

export default function GeometricShapeScroller() {
	// Create a hook that stores the current rotation
	const [rotation, setRotation] = React.useState(0);

	// Create a hook that stores the current scroll position
	const [scrollPosition, setScrollPosition] = React.useState(0);

	// React to scroll events
	React.useEffect(() => {
		setInterval(() => {
			setScrollPosition(window.scrollY);
		});
	}, []);

	// React to rotation changes
	React.useEffect(() => {
		// Update the rotation state
		setRotation(scrollPosition / 10);
	}, [scrollPosition]);

	// Setup useSpring
	const rotationSpring = useSpring({
		// Set the rotation to the current rotation
		rotation: rotation,
		// Set the config to slow down the animation
		config: {
			mass: 1,
			tension: 100,
			friction: 100,
		},
	});

	// Return the animated shape
	return (
		<animated.div
			style={{
				// Rotate the shape
				transform: rotationSpring.rotation.to((rotation) => `rotate(${rotation}deg)`),
			}}
			className={"flex justify-center mt-8 opacity-10 fixed bottom-20 right-20"}
		>
			<ShapeHexagon
				style={{
					transformOrigin: '50% 50%',
					margin: "0 auto",
				}}
				className={"m-auto"}
			/>
		</animated.div>
	);
}