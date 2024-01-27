import { Header } from './header/Header';
import { Content } from './Content';
import { WipModal } from './WipModal';
import type { JSX } from 'react';

export function App(): JSX.Element {
	return (
		<>
			<WipModal />
			<Header />
			<Content />
		</>
	);
}
