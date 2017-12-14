# sapper-hacker-news

## THIS IS VERY WORK-IN-PROGRESS

Testing ground for [sapper](https://github.com/rich-harris/sapper).

```bash
yarn
node server.js
```

...then navigate to [localhost:3000](http://localhost:3000).



## Lots still to do

Some of these are Svelte things, some of these are Sapper things:

* [x] Need a declarative way to set the document title on both client and server
* [x] Preloading, on server and client, to avoid the flash of unfetched content
* [x] Critical CSS
* [ ] Sapper doesn't currently watch the `routes` folder, so you have to keep restarting the server. Also, webpack only runs once
* [ ] Service worker
* [x] Build optimised production version
