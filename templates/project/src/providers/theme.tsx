import { BaseStyles, theme as githubTheme } from '@primer/components';
import { merge } from 'lodash';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = merge(githubTheme, {
	colors: {
		peakfijn: '#FF4D18',
	},
});

export const ThemeProvider: React.FC = (props) => (
	<StyledThemeProvider theme={theme}>
		<BaseStyles>
			{props.children as any}
		</BaseStyles>
	</StyledThemeProvider>
);
