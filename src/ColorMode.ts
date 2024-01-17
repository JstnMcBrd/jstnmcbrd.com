/** Available color mode options */
type ColorMode = 'auto' | 'light' | 'dark';

const LOCAL_STORAGE_KEY = 'color-mode';

/**
 * Refreshes the color mode and adds a listener that refreshes the color mode
 * whenever the user changes their OS preferred color scheme.
 *
 * Call this function once on page load.
 */
export function initializeColorMode(): void {
	refreshColorMode();
	getDarkSchemeMediaQuery().addEventListener('change', refreshColorMode);
}

function refreshColorMode(): void {
	setColorMode(getColorMode());
}

function getDarkSchemeMediaQuery(): MediaQueryList {
	return window.matchMedia('(prefers-color-scheme: dark)');
}

/**
 * Retrieves the preferred color mode from local storage, if set.
 * If it has not been set, returns 'auto' as the default.
 */
export function getColorMode(): ColorMode {
	return localStorage.getItem(LOCAL_STORAGE_KEY) as ColorMode | null ?? 'auto';
}

/**
 * Sets the color mode and saves it to local storage.
 * If the color mode is 'auto', the page will be set to 'dark' or 'light'
 * based on the preferred color scheme of the OS.
 */
export function setColorMode(colorMode: ColorMode): void {
	localStorage.setItem(LOCAL_STORAGE_KEY, colorMode);
	if (colorMode === 'auto') {
		colorMode = getDarkSchemeMediaQuery().matches ? 'dark' : 'light';
	}
	document.documentElement.setAttribute('data-bs-theme', colorMode);
}
