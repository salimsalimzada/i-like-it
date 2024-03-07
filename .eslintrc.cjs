module.exports = {
	root: true,
	env: { es2020: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:perfectionist/recommended-natural",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
};
