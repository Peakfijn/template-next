import { Component, ErrorInfo } from 'react';
import * as Sentry from '@sentry/browser';

export class SentryBoundary extends Component {
	componentDidCatch(error: Error, info: ErrorInfo) {
		Sentry.withScope((scope) => {
			Object.entries(info).forEach(([key, value]) => {
				scope.setExtra(key, value);
			});

			Sentry.captureException(error);
		});
	}

	render() {
		return this.props.children;
	}
}
