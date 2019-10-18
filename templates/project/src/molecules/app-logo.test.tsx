import React from 'react';
import { render } from 'src/providers/testing';
import { AppLogo } from './app-logo';

it('renders peakfijn logo', () => {
	const { getByAltText } = render(<AppLogo />);
	const imgSrc = getByAltText('peakfijn');

	expect(imgSrc).toHaveAttribute('src', '/images/peakfijn-logo.svg');
});

it('links to peakfijn', () => {
	const { getByAltText } = render(<AppLogo />);
	const imgLink = getByAltText('peakfijn').closest('a');

	expect(imgLink).toHaveAttribute('href', 'https://peakfijn.nl');
});
