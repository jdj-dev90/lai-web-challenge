import React from 'react';
import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ThemeToggleButton() {
	const { colorMode, toggleColorMode } = useColorMode();
	const SwitchIcon = colorMode === 'light' ? MoonIcon : SunIcon;
	const nextMode = colorMode === 'light' ? 'dark' : 'light';

	return (
		<Tooltip label={`Switch to ${nextMode} mode`} aria-label={`Switch to ${nextMode} mode`}>
			<IconButton
				aria-label={`Switch to ${nextMode} mode`}
				icon={<SwitchIcon />}
				onClick={toggleColorMode}
				isRound={true}
				size="lg"
				fontSize="lg"
				colorScheme={colorMode === 'light' ? 'purple' : 'orange'}
			/>
		</Tooltip>
	);
}

