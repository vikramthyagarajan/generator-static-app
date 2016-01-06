# generator-static-app [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A generator for creating a static web app

## Installation

First, install [Yeoman](http://yeoman.io) and generator-static-app using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-static-app
```

Then generate your new project:

```bash
yo static-app appName
```

##Running the project:

Put your static app within the public directory of the generated project, then run
```
gulp serve
```
and point your browser to the livereloaded server at localhost:3000 to see your app

##Building the project for Production:

Build the app for production, which minifies and optimizes files etc with
```
gulp build
```
then, you can run this production ready code with
```
NODE_ENV=production node .
```

## Additional Notes:
Do include all your css and js links within the <inject:css> and <inject:js> blocks within public/index.html.
This way, all your required js and css files will be minified and linked during production

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [Vikram Thyagarajan]()


[npm-image]: https://badge.fury.io/js/generator-static-app.svg
[npm-url]: https://npmjs.org/package/generator-static-app
[travis-image]: https://travis-ci.org/vikramthyagarajan/generator-static-app.svg?branch=master
[travis-url]: https://travis-ci.org/vikramthyagarajan/generator-static-app
[daviddm-image]: https://david-dm.org/vikramthyagarajan/generator-static-app.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/vikramthyagarajan/generator-static-app
