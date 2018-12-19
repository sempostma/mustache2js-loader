<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://worldvectorlogo.com/logos/webpack.svg">
  </a>
  <a href="https://html2js.esstudio.site">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://cdn.worldvectorlogo.com/logos/markdown.svg">
  </a>
</div>

# mustache2js-loader

Exports Mustache files to javascript instructions.

[![GitHub license](https://img.shields.io/github/license/LesterGallagher/mustache2js-loader.svg)](https://github.com/LesterGallagher/mustache2js-loader/blob/master/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/LesterGallagher/mustache2js-loader.svg)](https://github.com/LesterGallagher/mustache2js-loader/issues)
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

