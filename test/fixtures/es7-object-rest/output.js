var _destructuring_with_null = _interopRequireDefault(require("{{. __dirname}}/get.js")).default;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var z = {};

var _z = z,
    x = _objectWithoutProperties(_z, []);

var _z2 = z,
    x = _z2.x,
    y = _objectWithoutProperties(_z2, ["x"]);

var _z3 = z,
    x = _z3[x],
    y = _objectWithoutProperties(_z3, [x]);

(function (_ref) {
  let x = _ref.x,
      y = _objectWithoutProperties(_ref, ["x"]);
});

var _o = o;
x = _o.x;
y = _o.y;
z = _objectWithoutProperties(_o, ["x", "y"]);
_o;