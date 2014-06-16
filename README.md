### Install

`npm install`

### Run

Run `npm start` which invokes `gulp less` (but it'll use the local version of [gulp](https://github.com/gulpjs/gulp)).

### Problem

Current version of [less](https://github.com/less/less.js) compiles source-map using [`encodeURIComponent`](https://github.com/less/less.js/blob/v1.7.1/lib/less/source-map-output.js#L130) and [`convert-source-map`](https://github.com/thlorenz/convert-source-map) (the sourcemap magic [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)) only supports base64'd sourcemaps: https://github.com/thlorenz/convert-source-map/blob/f376d08b6955952b0106699a228bfae2bde16d79/index.js#L5

### BTW

In master branch of less this has been fixed, but hasnt been released yet.