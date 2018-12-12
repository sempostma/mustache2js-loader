<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://worldvectorlogo.com/logos/webpack.svg">
  </a>
  <a href="https://mustache2js.esstudio.site">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://html2js.esstudio.site/android-chrome-256x256.png">
  </a>
</div>

# mustache2js-loader

Exports Mustache files to javascript instructions.

![license][license]
![issues][issues]
![twitter][twitter]

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

I you just need to load static html snippets, try: [html2js-loader](https://www.npmjs.com/package/html2js-loader)

[twitter]: https://img.shields.io/twitter/url/https/www.npmjs.com/package/mustache2js-loader.svg?style=social
[issues]: https://img.shields.io/github/issues/LesterGallagher/mustache2js-loader.svg
[license]: https://img.shields.io/github/license/LesterGallagher/mustache2js-loader.svg
