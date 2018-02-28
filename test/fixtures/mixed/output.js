var _destructuring_with_null = _interopRequireDefault(require("/Users/ckwu/Documents/project/babel-plugin-destructuring-with-null/get.js")).default;

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rect = {};
_rect$topLeft = _destructuring_with_null(rect, "topLeft", [10, 20]);

var _rect$topLeft2 = _slicedToArray(_rect$topLeft, 2),
    x1 = _rect$topLeft2[0],
    y1 = _rect$topLeft2[1],
    _rect$bottomRight = _slicedToArray(rect.bottomRight, 2),
    x2 = _rect$bottomRight[0],
    y2 = _rect$bottomRight[1];