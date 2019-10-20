import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'src/providers/theme';
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components';

const TestProvider: React.FC = (props) => (
	<ThemeProvider>
		{props.children}
	</ThemeProvider>
);

const customRender = (ui: React.ReactElement<any>, options?: RenderOptions) => (
	render(ui, { wrapper: TestProvider, ...options })
);

export * from '@testing-library/react';
export { customRender as render };
