import * as Sentry from '@sentry/browser';

export const config = (options: Sentry.BrowserOptions = {}) => {
	const dsn = options.dsn || process.env.SENTRY_DSN;
	const release = process.env.SENTRY_RELEASE;
	const environment = process.env.SENTRY_ENVIRONMENT;
	const silent = process.env.SENTRY_SILENT;

	if (!silent && !dsn) {
		return console.warn('No Sentry DSN found, skipping init...');
	}

	Sentry.init({ dsn, release, environment, ...options });
};
