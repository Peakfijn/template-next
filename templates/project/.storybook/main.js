module.exports = {
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('ts-loader'),
					options: {
						compilerOptions: {
							noEmit: false,
							jsx: 'react',
						},
					},
				},
				{
					loader: require.resolve('react-docgen-typescript-loader'),
				},
			],
		});

		config.resolve.extensions.push('.ts', '.tsx');

		return config;
	},
	stories: ['../stories/**/*.stories.(ts|tsx)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-knobs/register',
	],
};
