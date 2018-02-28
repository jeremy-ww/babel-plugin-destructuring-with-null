var _destructuring_with_null = _interopRequireDefault(require("/Users/ckwu/Documents/project/babel-plugin-destructuring-with-null/get.js")).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rect = {};
var _rect$topLeft = rect.topLeft,
    x1 = _rect$topLeft.x,
    y1 = _rect$topLeft.y,
    _rect$bottomRight = rect.bottomRight,
    x2 = _rect$bottomRight.x,
    y2 = _rect$bottomRight.y;
var _ref = [0, 1, 2, 3, 4, 5, 6];
foo = _destructuring_with_null(_ref, "3", '3');
var bar = _ref[5];