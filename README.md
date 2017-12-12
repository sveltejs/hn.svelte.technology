# sapper-hacker-news

Testing ground for [sapper](https://github.com/rich-harris/sapper).

```bash
yarn
node server.js
```

...then navigate to [localhost:3000](http://localhost:3000).



## Lots still to do

Some of these are Svelte things, some of these are Sapper things:

* Need a declarative way to set the document title on both client and server
* Preloading, on server and client, to avoid the flash of unfetched content
* Critical CSS
* Sapper doesn't currently watch the `routes` folder, so you have to keep restarting the server. Also, webpack only runs once
* Service worker