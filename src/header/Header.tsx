import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { NavDivider } from './NavDivider.js';

import { GitHub } from '../svg/GitHub.js';
import { TwitterX } from '../svg/TwitterX.js';
import { LinkedIn } from '../svg/LinkedIn.js';

import logo from '../assets/zap.svg';

const navLinks: { title: string; href: string }[] = []; // TODO

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
	const breakpoint = 'sm';

	return (
		<Navbar fixed="top" expand={breakpoint} collapseOnSelect className="bg-body-tertiary border-bottom border-secondary-subtle">
			<Container fluid className="mx-1">
				<Navbar.Brand href="/">
					<img src={logo} width={24} height={24} title="Zap!" className="mb-1 me-2" />
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
						{/* Only use a NavDivider here if there are any navLinks to divide from */}
						{navLinks.length > 0 && <NavDivider breakpoint={breakpoint} />}
						<Container>
							<Row>
								{
									socials.map(({ title, href, icon }) => (
										<Col key={title} xs="auto" className="px-2">
											<Nav.Link
												className={`p-0 py-${breakpoint}-2`}
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
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
