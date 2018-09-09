import replace from 'rollup-plugin-replace';
import svelte from 'rollup-plugin-svelte';
import config from 'sapper/config/rollup.js';
import pkg from '../package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

export default {
	input: config.server.input(),
	output: config.server.output(),
	plugins: [
		svelte({
			generate: 'ssr',
			dev
		}),
		replace({
			'process.browser': false,
			'process.env.NODE_ENV': JSON.stringify(mode)
		})
	],
	external: Object.keys(pkg.dependencies).concat(
		require('module').builtinModules
	),

	// temporary, pending Rollup 1.0
	experimentalCodeSplitting: true
};