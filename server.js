const fs = require('fs');
const app = require('express')();
const sapper = require('sapper');
const static = require('serve-static');

const { PORT = 3000 } = process.env;
const dev = process.env.NODE_ENV !== 'production';

const template = fs.readFileSync('template.html', 'utf-8');

const fetch = require('node-fetch');
global.fetch = (url, opts) => {
	if (url[0] === '/') url = `http://localhost:${PORT}${url}`;
	return fetch(url, opts);
};

app.use(sapper({
	dev,
	selector: '#sapper',
	template: ({ main, html, css }) => {
		return template
			.replace('__main__', main)
			.replace('__html__', html)
			.replace('__css__', `<style>${css}</style>`);
	}
}));

app.use(static('static'));

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});