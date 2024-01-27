import type { JSX } from 'react';
import Stack from 'react-bootstrap/Stack';

import { Bootstrap, React, TypeScript, Vite } from './Logos.js';

const techLogoSpacing = 2;
const technologies = [
	{ logo: TypeScript, size: '20em' },
	{ logo: Bootstrap, size: '24em' },
	{ logo: React, size: '22em' },
	{ logo: Vite, size: '23em' },
];

export function Footer(): JSX.Element {
	function linkUnderlineOnlyOnHover(): string {
		return 'link-underline link-underline-opacity-0 link-underline-opacity-100-hover';
	}

	return (
		<Stack as="footer" gap={3} className="text-center text-body-secondary p-5 pt-3">
			<hr />
			<div>
				{'Made with '}
				{
					technologies.map(({ logo: Logo, size }, index) => (
						<Logo key={index} className={`mx-${techLogoSpacing}`} width={size} height={size} />
					))
				}
				{' and '}
				<span className={`ms-${techLogoSpacing}`}>❤️</span>
			</div>
			Copyright &copy; Justin McBride
			<a
				href="https://github.com/JstnMcBrd/jstnmcbrd.com"
				target="_blank"
				rel="noopener noreferrer"
				// mx-auto to prevent the full screen width from being clickable
				className={`mx-auto ${linkUnderlineOnlyOnHover()}`}
			>
				{'<Source />'}
			</a>
		</Stack>
	);
}
