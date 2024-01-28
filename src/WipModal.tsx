import type { JSX } from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

export function WipModal(): JSX.Element {
	const [show, setShow] = useState(true);

	function handleClose() {
		setShow(false);
	}

	return (
		<>
			<Modal centered show={show} onHide={handleClose} className="text-center" title="Work-in-progress">
				<Modal.Header closeButton>
					<Container className="ms-3">
						<Modal.Title>⚠️ Work-in-progress ⚠️</Modal.Title>
					</Container>
				</Modal.Header>
				<Modal.Body>
					<p>This website is not finished!</p>
					<p>{'Please don\'t judge too harshly :)'}</p>
				</Modal.Body>
			</Modal>
		</>
	);
}
