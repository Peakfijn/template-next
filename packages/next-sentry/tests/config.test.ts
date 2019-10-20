import * as Sentry from '@sentry/browser';
import { config } from '../src/config';

jest.mock('@sentry/browser');

const resetEnv = (values?: NodeJS.ProcessEnv) => {
	process.env = {
		...process.env,
		SENTRY_DSN: undefined,
		SENTRY_RELEASE: undefined,
		SENTRY_ENVIRONMENT: undefined,
		SENTRY_SILENT: undefined,
		...values,
	};
};

let oldEnv: NodeJS.ProcessEnv;

beforeAll(() => {
	jest.spyOn(console, 'warn').mockImplementation(() => undefined);
	oldEnv = process.env;
});

afterAll(() => {
	(console.warn as any).mockRestore();
	process.env = oldEnv;
});

it('warns and skips register when dsn not provided', () => {
	resetEnv();
	config();
	expect(console.warn).toBeCalledWith(expect.stringContaining('No Sentry DSN found'));
});

it('skips register silently when dsn not provided', () => {
	resetEnv({ SENTRY_SILENT: 'true' });
	config();
	expect(console.warn).not.toBeCalled();
});

it('configures sentry from environment', () => {
	const env = {
		SENTRY_DSN: 'my-dsn',
		SENTRY_RELEASE: '0.1.0',
		SENTRY_ENVIRONMENT: 'staging',
	};

	resetEnv(env);
	config();
	expect(Sentry.init).toBeCalledWith({
		dsn: env.SENTRY_DSN,
		release: env.SENTRY_RELEASE,
		environment: env.SENTRY_ENVIRONMENT,
	});
});

it('configures sentry from options', () => {
	const options: Sentry.BrowserOptions = {
		dsn: 'my-dsn',
		release: '0.1.0',
		environment: 'staging',
		logLevel: 2,
	};

	resetEnv();
	config(options);
	expect(Sentry.init).toBeCalledWith(options);
});

it('configures sentry from both options and environment', () => {
	const options: Sentry.BrowserOptions = {
		dsn: 'my-dsn',
		release: '0.1.0',
		environment: 'staging',
		logLevel: 2,
	};

	resetEnv({ SENTRY_DSN: 'should-not-be-used' });
	config(options);
	expect(Sentry.init).toBeCalledWith(options);
});
