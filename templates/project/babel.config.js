module.exports = {
	presets: ['next/babel'],
	plugins: [
		'dynamic-import-node',
		['module-resolver', {
			root: ['.'],
			alias: { src: './src' },
		}],
		['styled-components', {
			ssr: true,
			displayName: true,
			preprocess: true,
		}],
	],
};
