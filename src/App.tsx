import type { JSX } from 'react';

import { Header } from './header/Header.js';
import { Content } from './Content.js';
import { WipModal } from './WipModal.js';
import { Footer } from './Footer.js';

export function App(): JSX.Element {
	return (
		<>
			<WipModal />
			<Header />
			<Content />
			<Footer />
		</>
	);
}
