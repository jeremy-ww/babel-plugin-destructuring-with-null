import _destructuring_with_null from "/Users/ckwu/Documents/project/babel-plugin-destructuring-with-null/get.js";
import { NestedObjects } from "./some-module";
Foo = _destructuring_with_null(NestedObjects, "Foo", Bar);
const Bar = NestedObjects.Bar;