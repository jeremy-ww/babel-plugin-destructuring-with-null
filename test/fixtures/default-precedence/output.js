var _destructuring_with_null = _interopRequireDefault(require("/Users/ckwu/Documents/project/babel-plugin-destructuring-with-null/get.js")).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f0 = function (a, b = a, c = b) {
  return [a, b, c];
};

assert.deepEqual(f0(1), [1, 1, 1]);

var f1 = function ({
  a
}, b = a, c = b) {
  return [a, b, c];
};

assert.deepEqual(f1({
  a: 1
}), [1, 1, 1]);

var f2 = function ({
  a
}, b = a, c = a) {
  return [a, b, c];
};

assert.deepEqual(f2({
  a: 1
}), [1, 1, 1]);