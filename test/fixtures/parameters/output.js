var _destructuring_with_null = _interopRequireDefault(require("/Users/ckwu/Documents/project/babel-plugin-destructuring-with-null/get.js")).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function somethingAdvanced({
  topLeft: {
    x: x1,
    y: y1
  } = {},
  bottomRight: {
    x: x2,
    y: y2
  } = {}
}, p2, p3) {}

function unpackObject({
  title: title,
  author: author
}) {
  return title + " " + author;
}

console.log(unpackObject({
  title: "title",
  author: "author"
}));

var unpackArray = function ([a, b, c], [x, y, z]) {
  return a + b + c;
};

console.log(unpackArray(["hello", ", ", "world"], [1, 2, 3]));