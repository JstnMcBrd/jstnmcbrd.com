import type { JSX } from 'react';

import { Header } from './header/Header.js';
import { Content } from './Content.js';
import { Footer } from './Footer.js';
import { Konami } from './Konami.js';
import { WipModal } from './WipModal.js';

export function App(): JSX.Element {
	return (
		<>
			<WipModal />
			<Konami />
			<Header />
			<Content />
			<Footer />
		</>
	);
}
