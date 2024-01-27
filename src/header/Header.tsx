import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { Zap } from '../Logos.js';
import { NavDivider } from './NavDivider.js';
import { Socials } from './Socials.js';
import { ColorModeSelector } from './ColorModeSelector.js';

import './Header.css';

const navLinks: { title: string; href: string }[] = []; // TODO

export function Header() {
	const breakpoint = 'sm';

	return (
		<Navbar
			fixed="top"
			expand={breakpoint}
			collapseOnSelect
			className="bg-body-tertiary border-bottom border-secondary-subtle"
		>
			<Container fluid className="mx-1">
				<Navbar.Brand href="/">
					<Zap width={24} height={24} className="mb-1 me-2 zap-hover-glow" />
					Justin McBride
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto text-center">
						{
							navLinks.map(({ title, href }) => (
								<Nav.Link key={title} href={href}>{title}</Nav.Link>
							))
						}
						{/* Only use a NavDivider here if there are any navLinks to divide from */}
						{navLinks.length > 0 && <NavDivider breakpoint={breakpoint} />}
						<Socials />
						<NavDivider breakpoint={breakpoint} />
						<ColorModeSelector breakpoint={breakpoint} />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
