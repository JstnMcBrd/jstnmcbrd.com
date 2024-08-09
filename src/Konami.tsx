import type { JSX } from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

/** https://en.wikipedia.org/wiki/Konami_Code */
const konamiSequence = [
	'ArrowUp',
	'ArrowUp',
	'ArrowDown',
	'ArrowDown',
	'ArrowLeft',
	'ArrowRight',
	'ArrowLeft',
	'ArrowRight',
	'b',
	'a',
	'Enter',
];

function onKonami(callback: (event?: KeyboardEvent) => void): void {
	let sequenceIndex = 0;
	window.addEventListener('keydown', function (event: KeyboardEvent): void {
		if (event.key === konamiSequence[sequenceIndex]) {
			sequenceIndex++;
		}
		// Reset the sequence if the user gets one wrong
		else {
			sequenceIndex = 0;
		}

		// Success
		if (sequenceIndex === konamiSequence.length) {
			callback(event);
			sequenceIndex = 0;
		}
	});
}

/** A Konami code easter egg that plays the Rick Roll video when triggered. */
export function Konami(): JSX.Element {
	const rickRollVideoId = 'dQw4w9WgXcQ';

	const [show, setShow] = useState(false);

	function handleClose(): void {
		setShow(false);
	}

	onKonami(() => {
		setShow(!show);
	});

	return (
		<Modal size="xl" centered show={show} onHide={handleClose}>
			<Modal.Body
				style={{
					aspectRatio: '16/9',
					maxHeight: '90vh', // 100vh causes a scrollbar to appear
				}}
			>
				<iframe
					title="Rick Roll"
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/${rickRollVideoId}?autoplay=1`}
					allow="autoplay"
				/>
			</Modal.Body>
		</Modal>
	);
}
