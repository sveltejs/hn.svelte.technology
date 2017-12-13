const fs = require('fs');
const app = require('express')();
const sapper = require('sapper');
const static = require('serve-static');

const { PORT = 3000 } = process.env;
const dev = process.env.NODE_ENV !== 'production';

const fetch = require('node-fetch');
global.fetch = (url, opts) => {
	if (url[0] === '/') url = `http://localhost:${PORT}${url}`;
	return fetch(url, opts);
};

app.use(sapper({
	dev,
	selector: '#sapper'
}));

app.use(static('static'));

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});