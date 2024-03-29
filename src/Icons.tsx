import type { JSX } from 'react';

interface Props {
	width?: number;
	height?: number;
	className?: string;
}

export function BrightnessHigh({ width, height, className }: Props): JSX.Element {
	// https://icons.getbootstrap.com/icons/brightness-high/
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
			<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
		</svg>
	);
}

export function CircleHalf({ width, height, className }: Props): JSX.Element {
	// https://icons.getbootstrap.com/icons/circle-half/
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
			<path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
		</svg>
	);
}

export function GameJolt({ width, height, className }: Props): JSX.Element {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="currentColor" viewBox="3.5 4 17 17">
			<path d="M 8 4 L 8 6 L 7 6 L 7 8 L 6 8 L 6 10 L 5 10 L 5 12 L 4 12 L 4 14 L 10 14 L 10 16 L 9 16 L 9 17 L 9 18 L 8 18 L 8 20 L 9 20 L 9 19 L 10 19 L 10 18 L 11 18 L 11 17 L 12 17 L 12 16 L 13 16 L 13 15 L 14 15 L 14 14 L 15 14 L 15 13 L 16 13 L 16 12 L 17 12 L 17 11 L 18 11 L 18 10 L 19 10 L 19 9 L 16 9 L 16 8 L 17 8 L 17 7 L 18 7 L 18 6 L 19 6 L 19 5 L 20 5 L 20 4 L 8 4 z M 8 20 L 7 20 L 7 21 L 8 21 L 8 20 z M 9 6 L 16 6 L 16 7 L 15 7 L 15 8 L 14 8 L 14 9 L 13 9 L 13 10 L 12 10 L 12 11 L 13 11 L 13 12 L 14 12 L 14 11 L 15 11 L 15 12 L 14 12 L 14 13 L 13 13 L 13 12 L 12 12 L 12 11 L 11 11 L 11 12 L 10 12 L 10 11 L 9 11 L 9 12 L 8 12 L 8 11 L 7 11 L 7 10 L 8 10 L 8 8 L 9 8 L 9 6 z M 8 10 L 8 11 L 9 11 L 9 10 L 8 10 z M 10 11 L 11 11 L 11 10 L 10 10 L 10 11 z" />
		</svg>
	);
}

export function GitHub({ width, height, className }: Props): JSX.Element {
	// https://icons.getbootstrap.com/icons/github/
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
			<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
		</svg>
	);
}

export function LinkedIn({ width, height, className }: Props): JSX.Element {
	// https://icons.getbootstrap.com/icons/linkedin/
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
			<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
		</svg>
	);
}

export function MoonStars({ width, height, className }: Props): JSX.Element {
	// https://icons.getbootstrap.com/icons/moon-stars/
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
			<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
			<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
		</svg>
	);
}

export function TwitterX({ width, height, className }: Props): JSX.Element {
	// https://icons.getbootstrap.com/icons/twitter-x/
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
			<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
		</svg>
	);
}
