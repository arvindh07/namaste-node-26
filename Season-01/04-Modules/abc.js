const { sum, x } = require("./sum");
// import { sum, x } from "./sum.js";
const { add, sub } = require("./maths");
var a = 10;
var b = 20;

sum(a, b);
console.log("abc file ", a, b, x);

add(a, b);
sub(b, a);