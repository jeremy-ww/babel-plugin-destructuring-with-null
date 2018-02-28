import _destructuring_with_null from "{{. __dirname}}/get.js";
import { NestedObjects } from "./some-module";
Foo = _destructuring_with_null(NestedObjects, "Foo", Bar);
const Bar = NestedObjects.Bar;