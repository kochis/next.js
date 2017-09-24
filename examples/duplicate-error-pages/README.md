[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/kochis/next.js/tree/duplicate-error-example/examples/duplicate-error-pages)
# Example app showing duplicate error rendering issue

## How to setup

Download the example [or clone the repo](https://github.com/kochis/next.js):

```bash
git clone https://github.com/kochis/next.js
```

Checkout the example branch:

```bash
git checkout -t origin/duplicate-error-example
```

Go to example directory:

```bash
cd examples/duplicate-error-pages
```

Install dependencies and build in production mode:

```bash
yarn install
NODE_ENV=production yarn build
```

Start the server in production mode

```bash
NODE_ENV=production yarn start
```

The server throws an error in `pages/index.js`. You should see two error pages being displayed.
