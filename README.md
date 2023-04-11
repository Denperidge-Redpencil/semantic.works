# semantic.works

The front-end code for [semantic.works](https://semantic.works)!


## How-To

### Install & run
```
npm install
npm start
```

In case you get `ERR_OSSL_EVP_UNSUPPORTED`, run `export NODE_OPTIONS=--openssl-legacy-provider`

Make sure to have an instance of [app-mu-info](https://github.com/Denperidge-Redpencil/app-mu-info) running, and that the --proxy argument in [package.json](package.json) is configured towards it.
