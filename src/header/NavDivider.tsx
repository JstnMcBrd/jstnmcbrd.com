import type { JSX } from 'react';
import Nav from 'react-bootstrap/Nav';

interface Props {
	breakpoint: string;
}

export function NavDivider({ breakpoint }: Props): JSX.Element {
	function disappearWhenSmallerThan(size: string): string {
		return `d-none d-${size}-block`;
	}

	function appearWhenSmallerThan(size: string): string {
		return `d-${size}-none`;
	}

	const xMargin = 2;

	return (
		<Nav.Item className={`py-${breakpoint}-2`}>
			{/* When the navbar is collapsed, use a horizontal rule */}
			<HorizontalRule className={appearWhenSmallerThan(breakpoint)}></HorizontalRule>
			{/* When the navbar is normal, use a vertical rule */}
			<VerticalRule className={`${disappearWhenSmallerThan(breakpoint)} h-100 mx-${String(xMargin)}`}></VerticalRule>
		</Nav.Item>
	);
}

function HorizontalRule({ className }: { className?: string }): JSX.Element {
	return <hr className={className}></hr>;
}

function VerticalRule({ className = '' }: { className?: string }): JSX.Element {
	return <div className={`vr ${className}`}></div>;
}
