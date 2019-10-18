import React from 'react';
import { render } from '@testing-library/react';
import * as Sentry from '@sentry/browser';
import { SentryBoundary } from '../src/sentry-boundary';

jest.mock('@sentry/browser');

const ErrorComponent: React.SFC<{ error?: Error }> = ({ error }) => {
	if (error) throw error;
	return null;
}

beforeAll(() => {
	jest.spyOn(console, 'error').mockImplementation(() => undefined);
});

afterAll(() => {
	(console.error as any).mockRestore();
});

describe('componentDidCatch', () => {
	it('catches exceptions from children', () => {
		const { rerender } = render(<ErrorComponent />, { wrapper: SentryBoundary });

		expect(console.error).not.toHaveBeenCalled();
		rerender(<ErrorComponent error={new Error('Test error')} />);
		expect(console.error).toHaveBeenCalled();
	});

	it('reports all information about the error', () => {
		const error = new Error('Test error');
		render(<ErrorComponent error={error} />, { wrapper: SentryBoundary });

		const reporter = (Sentry.withScope as jest.Mock).mock.calls[0][0];
		const scope = { setExtra: jest.fn() };
		const stack = expect.stringContaining('in ErrorComponent');

		reporter(scope);

		expect(scope.setExtra).toHaveBeenCalledWith('componentStack', stack);
		expect(Sentry.captureException).toHaveBeenCalledWith(error);
	});
});
