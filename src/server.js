import express from 'express';
import compression from 'compression';
import serve from 'serve-static';
import * as sapper from '../__sapper__/server.js';

express() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		serve('static'),
		sapper.middleware()
	)
	.listen(process.env.PORT);
