module.exports = {
	env: {
		browser: false,
		commonjs: true,
		node: true,
		mocha: true
	},
	globals: {
		__dirname: true
	},
	extends: "eslint:recommended",
	rules: {
		"linebreak-style": [
			"error",
			"windows"
		],
		quotes: [
			"error",
			"double"
		],
		"prefer-const": "error",
		"no-const-assign": "error",
		"no-var": "error",
		"no-new-object": "error",
		"prefer-arrow-callback": "error"
	}
};
