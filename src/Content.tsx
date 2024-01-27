import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import reactLogo from './assets/react.svg';
const viteLogo = 'https://vitejs.dev/logo.svg';

import './Content.css';

// TODO replace the Vite template with real content
export function Content() {
	const [count, setCount] = useState(0);

	return (
		<Container fluid>
			<Row className="vh-100" style={{ minHeight: '40rem' }}>
				<Col className="m-auto" xs="auto">
					<Stack className="text-center" gap={4}>
						<div>
							<a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
								<img className="m-3 hover-glow" src={viteLogo} height="100" alt="Vite logo" />
							</a>
							<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
								<img className="m-3 hover-glow spin" src={reactLogo} height="100" alt="React logo" />
							</a>
						</div>
						<h1 className="display-3 fw-bold">Vite + React</h1>
						<Card className="p-4">
							<Button onClick={() => {
								setCount(c => c + 1);
							}}
							>
								{`count is ${count}`}
							</Button>
							<p className="mb-0">
								{'Edit '}
								<code>src/App.tsx</code>
								{' and save to test HMR'}
							</p>
						</Card>
						<p className="text-dark-emphasis">
							Click on the Vite and React logos to learn more
						</p>
					</Stack>
				</Col>
			</Row>
		</Container>
	);
}
