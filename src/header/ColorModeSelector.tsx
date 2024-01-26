import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { ColorMode, getColorMode, setColorMode } from '../ColorMode.js';

import { Auto } from '../svg/Auto.js';
import { Light } from '../svg/Light.js';
import { Dark } from '../svg/Dark.js';

const colorModeIcons = {
	[ColorMode.Auto]: Auto,
	[ColorMode.Light]: Light,
	[ColorMode.Dark]: Dark,
};

function capitalizeColorMode(colorMode: ColorMode): string {
	return colorMode.charAt(0).toUpperCase() + colorMode.slice(1);
}

interface Props {
	breakpoint: string;
}

export function ColorModeSelector({ breakpoint }: Props) {
	function disappearWhenSmallerThan(size: string) {
		return `d-none d-${size}-block`;
	}

	function appearWhenSmallerThan(size: string) {
		return `d-${size}-none`;
	}

	const [localColorMode, setLocalColorMode] = useState(getColorMode());

	useEffect(() => {
		setColorMode(localColorMode);
	}, [localColorMode]);

	function mainIcon() {
		return colorModeIcons[localColorMode]({ width: 20, height: 20 });
	}

	function optionIcon(mode: ColorMode) {
		return colorModeIcons[mode]({ width: 16, height: 16, className: 'me-2' });
	}

	return (
		<>
			{/* When the navbar is collapsed, use a button group */}
			<ButtonGroup className={`${appearWhenSmallerThan(breakpoint)} mb-1`}>
				{
					Object.values(ColorMode).map(mode => (
						<Button
							key={mode}
							variant={localColorMode === mode ? 'primary' : 'outline-secondary'}
							onClick={() => {
								setLocalColorMode(mode);
							}}
						>
							{optionIcon(mode)}
							{capitalizeColorMode(mode)}
						</Button>
					))
				}
			</ButtonGroup>
			{/* When the navbar is normal, use a dropdown */}
			<NavDropdown
				className={disappearWhenSmallerThan(breakpoint)}
				title={mainIcon()}
				align="end"
			>
				{
					Object.values(ColorMode).map(mode => (
						<NavDropdown.Item
							key={mode}
							active={localColorMode === mode}
							onClick={() => {
								setLocalColorMode(mode);
							}}
						>
							{optionIcon(mode)}
							{capitalizeColorMode(mode)}
						</NavDropdown.Item>
					))
				}
			</NavDropdown>
		</>

	);
}
