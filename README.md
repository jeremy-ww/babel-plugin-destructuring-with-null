# babel-plugin-destructuring-with-null [![Build Status](https://img.shields.io/circleci/project/github/Army-U/babel-plugin-destructuring-with-null.svg?style=flat-square)](https://circleci.com/gh/Army-U/babel-plugin-destructuring-with-null) [![npm package](https://img.shields.io/npm/v/babel-plugin-destructuring-with-null.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-destructuring-with-null)

Resolve the problem of the default value only trigged by its value is undefined in destructuring, Reduce time spent communicating with backends. [（中文文档）](README.zh-CN.md)

![Design Sketch](https://snag.gy/cd26O5.jpg)

## Install

```bash
$ npm i babel-plugin-destructuring-with-null -D
```

## Example

```js
const { name = 'tom' } = null
const { list: [, first = 'foo', second = 'bar'] } = { list: [false, null, undefined] };

                    ↓ ↓ ↓ ↓ ↓ ↓

const _ref = null,
name = _destructuring_with_null(_ref, 'name', 'tom');     // name === 'tom'

const _list = {list: [false, null, undefined]},
_list$list = _slicedToArray(_list.list, 3),
first = _destructuring_with_null(_list$list, '1', 'foo'), // first  === 'foo',
second = _destructuring_with_null(_list$list, '2', 'bar');// second === 'bar';
```

## Usage

`.babelrc`

```json
{
  "plugins": [
    "babel-plugin-destructuring-with-null"
  ]
}
```

## Why we need this

Because [ES6 destructuring](http://exploringjs.com/es6/ch_destructuring.html#sec_default-values-destructuring) default values only kick in if the value is undefined. null, false and 0 are all still values. But other languages ​​don't has undefined this thing, null means does not exist. The purpose of this plugin is to avoid multiple judgments of the deconstructed object is null before destructuring.

## License

Copyright (c) 2017-present, Army-U. Released under the [MIT](https://opensource.org/licenses/MIT) License.
