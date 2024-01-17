import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

import './App.css';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Stack className="main-stack" gap={4}>
				<div>
					<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" rel="noreferrer">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1 className="title">Vite + React</h1>
				<Card>
					<Button onClick={() => {
						setCount(c => c + 1);
					}}
					>
						{`count is ${count}`}
					</Button>
					<p>
						{'Edit '}
						<code>src/App.tsx</code>
						{' and save to test HMR'}
					</p>
				</Card>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
			</Stack>
		</div>
	);
}
