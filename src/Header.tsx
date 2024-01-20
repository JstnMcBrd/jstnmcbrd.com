import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { GitHub } from './svg/GitHub.jsx';
import { TwitterX } from './svg/TwitterX.jsx';
import { LinkedIn } from './svg/LinkedIn.js';

import logo from './assets/zap.svg';

const navLinks: { title: string; href: string }[] = [];

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

export function Header() {
	return (
		<Navbar fixed="top" expand="sm" collapseOnSelect className="bg-body-tertiary border-bottom border-secondary-subtle">
			<Container fluid className="mx-1">
				<Navbar.Brand href="/">
					<img src={logo} width="24" height="24" title="Zap!" className="mb-1 me-2" />
					{' Justin McBride'}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{
							navLinks.map(({ title, href }) => (
								<Nav.Link key={title} href={href}>{title}</Nav.Link>
							))
						}
						<Container>
							<Row>
								{
									socials.map(({ title, href, icon }) => (
										<Col key={title} xs="auto" className="px-2">
											<Nav.Link className="px-0" href={href} title={title} target="_blank" rel="noopener noreferrer">
												{icon({ width: 20, height: 20 })}
											</Nav.Link>
										</Col>
									))
								}
							</Row>
						</Container>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
