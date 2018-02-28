var _destructuring_with_null = _interopRequireDefault(require("/Users/ckwu/Documents/project/babel-plugin-destructuring-with-null/get.js")).default;

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 1,
    b = 2;
var a = 1,
    b = 2;
var a = 1;
b = _destructuring_with_null(2, "2", '1');
var c = [3, 4];
var a = 1,
    b = 2,
    c = [3, 4];
var _ref = [1, 2, 3],
    a = _ref[0],
    b = _ref[1];
_ref2 = _destructuring_with_null([1, 2, 3], "", []);

var _ref3 = _slicedToArray(_ref2, 2),
    a = _ref3[0],
    b = _ref3[1];

var _ref4 = [a, b],
    a = _ref4[0],
    b = _ref4[1];
var _ref5 = [a[1], a[0]];
a[0] = _ref5[0];
a[1] = _ref5[1];
var _ref6 = [...foo, bar],
    a = _ref6[0],
    b = _ref6[1];
var _ref7 = [foo(), bar],
    a = _ref7[0],
    b = _ref7[1];
var _ref8 = [clazz.foo(), bar];
a = _destructuring_with_null(_ref8, "0", '');
var b = _ref8[1];
var _ref9 = [clazz.foo, bar],
    a = _ref9[0],
    b = _ref9[1];