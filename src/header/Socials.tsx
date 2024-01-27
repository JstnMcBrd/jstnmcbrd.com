import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { GitHub, LinkedIn, TwitterX } from '../Icons.js';

const socials = [
	{
		title: 'GitHub',
		href: 'https://github.com/JstnMcBrd',
		icon: GitHub,
	},
	{
		title: 'LinkedIn',
		href: 'https://linkedin.com/in/JstnMcBrd',
		icon: LinkedIn,
	},
	{
		title: 'Twitter/X',
		href: 'https://x.com/JstnMcBrd',
		icon: TwitterX,
	},
];

export function Socials() {
	return (
		<Container>
			<Row>
				{
					socials.map(({ title, href, icon }) => (
						<Col key={title} className="px-2">
							<Nav.Link
								className="px-0"
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								title={title}
							>
								{icon({ width: 20, height: 20 })}
							</Nav.Link>
						</Col>
					))
				}
			</Row>
		</Container>
	);
}
