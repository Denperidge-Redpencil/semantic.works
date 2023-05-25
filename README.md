# semantic.works

A website built to be...
- ... an introduction & documentation to [semantic.works](https://semantic.works) and our microservice tech stack
- ... a live example of the power of [Ember.js](https://emberjs.com/) and our microservice [app-mu-info](docs/app-mu-info)
    - ... the latter of which allows us to write our documentation inside of our repositories and have it update everywhere, as well as switch between Git hosts where needed
- ... be independent of CDN's (w.i.p., see #3)

## How-To

### Install & run
```
npm install
npm start
```

In case you get `ERR_OSSL_EVP_UNSUPPORTED`, run `export NODE_OPTIONS=--openssl-legacy-provider` (or use `npm run start:ssl`)

Make sure to have an instance of [app-mu-info](https://github.com/Denperidge-Redpencil/app-mu-info) running, and that the --proxy argument in [package.json](package.json) is configured towards it.
