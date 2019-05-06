## DEPRECATED — see https://github.com/sveltejs/hn.svelte.dev instead

---

# sapper-hacker-news

Testing ground for [sapper](https://github.com/rich-harris/sapper), a work-in-progress app development framework based on Svelte.

```bash
yarn
yarn run dev
```

...then navigate to [localhost:3000](http://localhost:3000).

Or to run in production mode, `yarn start`.


## Lots still to do

Some of these are Svelte things, some of these are Sapper things:

* [x] Need a declarative way to set the document title on both client and server
* [x] Preloading, on server and client, to avoid the flash of unfetched content
* [x] Critical CSS
* [ ] Sapper doesn't currently watch the `routes` folder, so you have to keep restarting the server. Also, webpack only runs once
* [x] Service worker
* [x] Build optimised production version
