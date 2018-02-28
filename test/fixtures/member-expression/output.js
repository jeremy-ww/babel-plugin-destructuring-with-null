var _destructuring_with_null = _interopRequireDefault(require("/Users/ckwu/Documents/project/babel-plugin-destructuring-with-null/get.js")).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = [1, 2];
foo.foo = _destructuring_with_null(_ref, "0", 1);
foo.bar = _ref[1];
;