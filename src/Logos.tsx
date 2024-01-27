import type { JSX } from 'react';

interface Props {
	width?: string | number;
	height?: string | number;
	className?: string;
}

import bootstrapLogo from './assets/bootstrap.svg';
export function Bootstrap({ width, height, className }: Props): JSX.Element {
	return (
		<a title="Bootstrap" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
			<img alt="Bootstrap" src={bootstrapLogo} width={width} height={height} className={className} />
		</a>
	);
}

import reactLogo from './assets/react.svg';
export function React({ width, height, className }: Props): JSX.Element {
	return (
		<a title="React" href="https://react.dev" target="_blank" rel="noopener noreferrer">
			<img alt="React" src={reactLogo} width={width} height={height} className={className} />
		</a>
	);
}

import typescriptLogo from './assets/typescript.svg';
export function TypeScript({ width, height, className }: Props): JSX.Element {
	return (
		<a title="TypeScript" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
			<img alt="TypeScript" src={typescriptLogo} width={width} height={height} className={className} />
		</a>
	);
}

export function Vite({ width, height, className }: Props): JSX.Element {
	return (
		<a title="Vite" href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
			<img alt="Vite" src="https://vitejs.dev/logo.svg" width={width} height={height} className={className} />
		</a>
	);
}

export function Zap({ width, height, className }: Props): JSX.Element {
	return (
		// No link to open for this one
		<span title="Zap!">
			{/* Borrow the SVG from another website to avoid hosting it locally */}
			<img alt="Zap!" src="https://static.revolt.chat/emoji/mutant/26a1.svg" width={width} height={height} className={className} />
		</span>
	);
}
