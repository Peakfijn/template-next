/* eslint-disable @typescript-eslint/no-var-requires */
const LernaProject = require('@lerna/project');
const extraScopes = [
	'template/package',
	'template/project',
];

module.exports = {
	extends: ['@peakfijn/config-commitlint'],
	utils: { getScopeRule },
	rules: {
		'scope-empty': [0],
		'scope-enum': getScopeRule,
	},
};

// see: https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-lerna-scopes/index.js
function getScopeRule(context = {}) {
	const project = new LernaProject(context.cwd || process.cwd());

	return project.getPackages()
		.then(packages => (
			packages
				.map(pkg => pkg.name)
				.map(name => (name.charAt(0) === '@' ? name.split('/')[1] : name))
				.concat(extraScopes)
		))
		.then(scopes => [2, 'always', scopes]);
}
