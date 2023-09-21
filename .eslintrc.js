module.exports = // "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning(doesn’ t affect exit code)
// "warn" or 2 - turn the rule on as an error(exit code is 1 when triggered)
{
	"parser": "@babel/eslint-parser",
	"env": {
		"browser": true
	},
	"parserOptions": {
		"sourceType": "module",
		"allowImportExportEverywhere": true,
		"babelOptions": {
			"presets": ["@babel/preset-react"]
		},
		"ecmaVersion": 2020
	},
	"extends": ["plugin:react/recommended", "plugin:prettier/recommended"],
	"plugins": [
		"prettier",
		"react",
		"mobx-computed-getters"
		// "@babel/plugin-proposal-class-properties",
		// "@babel/plugin-proposal-private-methods"
	],
	"ignorePatterns": [
		"**/public/*.js",
		"**/cypress/*.js",
		"**/cypress/**/*.js"
	],
	"globals": {
		"Map": true,
		"Plaid": true,
		"analytics": true,
		"ga": true,
		"google": true,
		"require": true,
		"Promise": true,
		"Set": true,
		"module": true,
		"process": true
	},
	"rules": {
		// "indent": ["warn", 2],
		// "max-len": ["warn", 120],
		"no-undef": "warn",
		"no-unused-vars": ["warn", { "caughtErrors": "all", "caughtErrorsIgnorePattern": "^unused($|[A-Z].*$)", "argsIgnorePattern": "^unused($|[A-Z].*$)", "varsIgnorePattern": "^unused($|[A-Z].*$)" }],
		"semi": ["warn", "always"],
		"no-extra-semi": "error",
		"quotes": ["warn", "single", { "avoidEscape": true }], // "avoidEscape": true allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise
		"import/named": "off",
		"no-trailing-spaces": "error",
		"no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
		"react/jsx-no-undef": "error",
		"react/prop-types": "off",
		"react/no-unescaped-entities": "off",
		"react/no-direct-mutation-state": "warn",
		"react/jsx-first-prop-new-line": [2, "multiline"]

	}
}


