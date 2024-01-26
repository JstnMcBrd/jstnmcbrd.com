import Nav from 'react-bootstrap/Nav';

interface Props {
	breakpoint: string;
}

export function NavDivider({ breakpoint }: Props) {
	function disappearWhenSmallerThan(size: string) {
		return `d-none d-${size}-block`;
	}

	function appearWhenSmallerThan(size: string) {
		return `d-${size}-none`;
	}

	const xMargin = 2;

	return (
		<Nav.Item className={`py-${breakpoint}-2`}>
			{/* When the navbar is collapsed, use a horizontal rule */}
			<HorizontalRule className={appearWhenSmallerThan(breakpoint)}></HorizontalRule>
			{/* When the navbar is normal, use a vertical rule */}
			<VerticalRule className={`${disappearWhenSmallerThan(breakpoint)} h-100 mx-${xMargin}`}></VerticalRule>
		</Nav.Item>
	);
}

function HorizontalRule({ className }: { className?: string }) {
	return <hr className={className}></hr>;
}

function VerticalRule({ className }: { className?: string }) {
	return <div className={`vr ${className}`}></div>;
}
