// This file is generated by Sapper — do not edit it!
export const routes = [
	{ pattern: /^\/?$/, ignore: true },
	{ pattern: /^\/about\/?$/, params: () => ({}), load: () => import(/* webpackChunkName: "about" */ '../../routes/about.html') },
	{ pattern: /^\/item(?:\/([^\/]+?))?\/?$/, params: match => ({ id: match[1] }), load: () => import(/* webpackChunkName: "item_$id$" */ '../../routes/item/[id].html') },
	{ pattern: /^\/user(?:\/([^\/]+?))?\/?$/, params: match => ({ name: match[1] }), load: () => import(/* webpackChunkName: "user_$name$" */ '../../routes/user/[name].html') },
	{ error: '4xx', load: () => import(/* webpackChunkName: "_4xx" */ '../../routes/4xx.html') },
	{ error: '5xx', load: () => import(/* webpackChunkName: "_5xx" */ '../../routes/5xx.html') },
	{ pattern: /^(?:\/([^\/]+?)(?:\/([^\/]+?))?)?\/?$/, params: match => ({ list: match[1], page: match[2] }), load: () => import(/* webpackChunkName: "$list$_$page$" */ '../../routes/[list]/[page].html') }
];

if (module.hot) {
	import('/Users/208311/Development/SVELTE/sapper-hacker-news/node_modules/sapper/hmr-client.js').then(client => {
		client.connect(10000);
	});
}