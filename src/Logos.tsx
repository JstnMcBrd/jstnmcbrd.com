interface Props {
	width?: string | number;
	height?: string | number;
	className?: string;
}

import reactLogo from './assets/react.svg';
export function React({ width, height, className }: Props) {
	return (
		<a title="React" href="https://react.dev" target="_blank" rel="noopener noreferrer">
			<img alt="React" src={reactLogo} width={width} height={height} className={className} />
		</a>
	);
}

export function Vite({ width, height, className }: Props) {
	return (
		<a title="Vite" href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
			<img alt="Vite" src="https://vitejs.dev/logo.svg" width={width} height={height} className={className} />
		</a>
	);
}

export function Zap({ width, height, className }: Props) {
	return (
		// No link to open for this one
		<span title="Zap!">
			{/* Borrow the SVG from another website to avoid hosting it locally */}
			<img alt="Zap!" src="https://static.revolt.chat/emoji/mutant/26a1.svg" width={width} height={height} className={className} />
		</span>
	);
}