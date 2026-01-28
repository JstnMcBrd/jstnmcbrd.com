import type { JSX } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { GameJolt, GitHub, LinkedIn, X } from '../Icons.js';

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
		title: 'X (Twitter)',
		href: 'https://x.com/JstnMcBrd',
		icon: X,
	},
	{
		title: 'Game Jolt',
		href: 'https://justcorp.gamejolt.io',
		icon: GameJolt,
	},
];

export function Socials(): JSX.Element {
	return (
		<Container>
			<Row>
				{
					socials.map(({ title, href, icon: Icon }) => (
						<Col key={title} className="px-2">
							<Nav.Link
								className="px-0"
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								title={title}
							>
								<Icon width={20} height={20} />
							</Nav.Link>
						</Col>
					))
				}
			</Row>
		</Container>
	);
}
