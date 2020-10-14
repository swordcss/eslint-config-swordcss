module.exports = {
	env: {
		browser: false,
		commonjs: true,
		node: true,
		mocha: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 12
	},
	globals: {
		__dirname: true
	},
	extends: "eslint:recommended",
	rules: {
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
