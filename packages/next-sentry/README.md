# Next Sentry - Peakfijn

Quickly integrate [Sentry](https://sentry.io/welcome/) in Next using environment variables and a React boundary.

<div align="center">
	<br />
	<br />
	<pre>npm install --save @peakfijn/next-sentry</pre>
	<br />
	<br />
</div>

1. [Getting started](#getting-started)
2. [Used variables](#used-variables)

## Getting started

To set up Sentry, we need to initialize the client. You can do that with this code.

```javascript
import { config } from '@peakfijn/next-sentry';
// initialize sentry with variables from environment
config();
// initialize sentry with extra config
config({
	dns: '<DSN>',
	maxBreadcrumbs: 50,
	debug: true,
});
// or initialize sentry instantly with environment variables
import '@peakfijn/next-sentry/config';
```

After Sentry is set up, we need to "catch" React errors.
You can do this by wrapping all components in `src/pages/_app.tsx` with the `SentryBoundary` component.

> We recommend wrapping all components with this boundary, but you can also use this for individual components.

```javascript
import React from 'react';
import NextApp from 'next/app';
import { SentryBoundary } from '@peakfijn/next-sentry';

export default class App extends NextApp {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<SentryBoundary>
				<Component {...pageProps} />
			</SentryBoundary>
		);
	}
}
```

## Used variables

This library can enable Sentry automatically if you use the provided environment variables.

variable             | required?    | description
---                  | ---          | ---
`SENTRY_DSN`         | **required** | Your [project DSN](https://docs.sentry.io/error-reporting/configuration/?platform=node) to authenticate the Sentry client.
`SENTRY_RELEASE`     | _optional_   | An unique [release or version name](https://docs.sentry.io/workflow/releases/?platform=node).
`SENTRY_ENVIRONMENT` | _optional_   | The [environment name](https://docs.sentry.io/enriching-error-data/environments/?platform=node) of the project.
`SENTRY_SILENT`      | _optional_   | Hide the warning and skip Sentry init, if no DSN is set.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

<div align="center">
    <br />
    <br />
    <strong><a href="https://peakfijn.nl">Peakfijn</a></strong>
    <br />
    <br />
</div>
