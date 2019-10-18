import React from 'react';
import { render } from 'src/providers/testing';
import { PeakfijnPage } from './peakfijn';

it('renders peakfijn text', () => {
	const { getByText } = render(<PeakfijnPage />);

	expect(getByText('Peakfijn ❤️')).toBeInTheDocument();
});

it('renders nextjs link', () => {
	const { getByText } = render(<PeakfijnPage />);

	expect(getByText('NextJS')).toHaveProperty('href', 'https://github.com/zeit/next.js');
});
