module.exports = {
	cacheDirectory: '.jest',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/node_modules/',
	],
	testRegex: '\\.test\\.(js|tsx?)$',
	transform: {
		'^.+\\.(js|ts)x?$': 'babel-jest',
	},
	transformIgnorePatterns: [
		'node_modules/(?!(@primer/components))',
	],
};
