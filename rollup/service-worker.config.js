import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

export default {
	input: config.serviceworker.input(),
	output: config.serviceworker.output(),
	plugins: [
		replace({
			'process.browser': true,
			'process.env.NODE_ENV': JSON.stringify(mode)
		}),
		!dev && terser()
	]
};
