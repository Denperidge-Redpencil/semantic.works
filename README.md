# semantic.works

A website built to be...
- ... an introduction & documentation to [semantic.works](https://semantic.works) and our microservice tech stack
- ... a live example of the power of [Ember.js](https://emberjs.com/) and our microservice [app-mu-info](https://github.com/Denperidge-Redpencil/app-mu-info-rework)
    - ... the latter of which allows us to write our documentation inside of our repositories and have it update everywhere, as well as switch between Git hosts where needed
- ... be independent of CDN's (w.i.p., see #3)

## How-To

### Install & run
```bash
npm install
npm run dev  # In case you get `ERR_OSSL_EVP_UNSUPPORTED`, run "export NODE_OPTIONS=--openssl-legacy-provider" (or use "npm run dev:ssl")
```

Make sure to have an instance of [app-mu-info](https://github.com/Denperidge-Redpencil/app-mu-info-rework) running, and that the --proxy argument in [package.json](package.json) is configured towards it.

## Discussions
### Env differences
The production environment (used in npm start & npm run build), the favicon is served from /assets/. In development (used in npm run dev) it's served by root


## Reference
### API & Data models
This project uses data from app-mu-info, and thus the models defined in [app/models/](app/models/) adhere to this. You can [view the GitHub repository of app-mu-info here](https://github.com/Denperidge-Redpencil/app-mu-info-rework).

### Project structure & used technologies
- Ember (v3)
- Favicon:
    - Location: [public/favicon.png](public/favicon.png)
    - Handled by: `ember-cli-favicon`
-

