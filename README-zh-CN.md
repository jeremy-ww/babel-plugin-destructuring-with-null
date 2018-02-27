# babel-plugin-destructuring-with-null [![Build Status](https://img.shields.io/circleci/project/github/Army-U/babel-plugin-destructuring-with-null.svg?style=flat-square)](https://travis-ci.org/Army-U/babel-plugin-destructuring-with-null) [![npm package](https://img.shields.io/npm/v/babel-plugin-destructuring-with-null.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-destructuring-with-null)

解决解构默认值只有在值为 undefined 时才能触发设置的默认值问题, 减少和后端沟通的时间. [（English Doc）](README.md)

![Design Sketch](https://snag.gy/cd26O5.jpg)

## 安装

```bash
$ npm i babel-plugin-destructuring-with-null -D
```

## 示例

```js
const { name = 'tom' } = null
const { list: [, first = 'foo', second = 'bar'] } = { list: [false, null, undefined] };

                    ↓ ↓ ↓ ↓ ↓ ↓

const _ref = null,
name = _destructuring_with_null(_ref, 'name', 'tom');     // name === 'tom'

const _list = {list: [false, null, undefined]},
_list$list = _slicedToArray(_list.list, 3),
first = _destructuring_with_null(_list$list, '1', 'foo'), // first === 'foo',
second = _destructuring_with_null(_list$list, '2', 'bar');// second === 'bar';
```

## 使用

`.babelrc`

```json
{
  "plugins": [
    "babel-plugin-destructuring-with-null"
  ]
}
```

## 为什么需要这个插件

[ES6 destructuring](http://exploringjs.com/es6/ch_destructuring.html#sec_default-values-destructuring) 只有在获取值为 undefined 的时候才会触发设置的默认值, 但是其他语言没有 undefined 这个东西, null 就意味着不存在. 这个插件存在的目的就是为了避免在解构之前的多次判断解构对象是否为 null.

## 证书

Copyright (c) 2017-present, Army-U. Released under the [MIT](https://opensource.org/licenses/MIT) License.
