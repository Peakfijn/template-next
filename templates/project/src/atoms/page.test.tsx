import React from 'react';
import { render } from 'src/providers/testing';
import { Page } from './page';

it('renders container with background', () => {
	const { getByText } = render(
		<Page>page</Page>
	);

	const page = getByText('page');

	expect(page).toHaveStyleRule('backgroud-color');
	expect(page).toHaveStyleRule('backgroud-image');
});
