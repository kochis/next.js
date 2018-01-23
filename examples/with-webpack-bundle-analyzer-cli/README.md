[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-webpack-bundle-analyzer-cli)

# Webpack Bundle Analyzer with CLI example

## How to use

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/master | tar -xz --strip=2 next.js-master/examples/with-webpack-bundle-analyzer
cd with-webpack-bundle-analyzer-cli
```

Install it

```bash
npm install
```

Run the next build

```bash
npm run build
```

This will generate a stats file in `.next/webpack-stats.json`

You can then start `Webpack Bundle Analyzer` with

```bash
npm run analyze
```

Which will start the webpack analyzer server at `http://127.0.0.1:8888`


## The idea behind the example

This example shows how to analyze the output bundles using [webpack-bundle-analyzer](https://github.com/th0r/webpack-bundle-analyzer#as-plugin) with a webpack stats file.

The `analyze` script in `package.json` points to the webpack stats file generated by next when setting `webpackStast: true` in `next.config.js`. See the example config in this repo.