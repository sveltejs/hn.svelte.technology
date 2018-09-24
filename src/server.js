import express from 'express';
import compression from 'compression';
import sapper from 'sapper';
import serve from 'serve-static';
import { manifest } from './manifest/server.js';

express() // You can also use Express
	.use(compression({ threshold: 0 }))
	.use(serve('static'), sapper({ manifest }))
	.listen(process.env.PORT);
