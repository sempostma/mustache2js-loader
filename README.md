<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://worldvectorlogo.com/logos/webpack.svg">
  </a>
  <a href="https://mustache.github.io">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://cdn-images-1.medium.com/max/1440/1*lH3QlW2O3G5A_pAhhJU0Dw.jpeg">
  </a>
</div>

# mustache2js-loader

Exports Mustache files to javascript instructions.

[![GitHub license](https://img.shields.io/github/license/sempostma/mustache2js-loader.svg)](https://github.com/sempostma/mustache2js-loader/blob/master/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/LesterGallagher/mustache2js-loader.svg)](https://github.com/sempostma/mustache2js-loader/issues)
[![Twitter](https://img.shields.io/twitter/url/https/www.npmjs.com/package/mustache2js-loader.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmustache2js-loader)


## Install

```bash
npm i -D mustache2js-loader
```

## Usage

Add the mustache2js-loader to your webpack.config.js.

```js
{
  test: /\.html$/,
  use: {
    loader: 'mustache2js-loader',
    options: {}
  }
}
```

I you just need to load static html snippets, try: [html2js-loader](https://www.npmjs.com/package/mustache2js-loader)

