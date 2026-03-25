console.log("running sum module ");
function sum (a, b) {
    console.log("SUM ", a + b);
}

var x = 100;

// cjs
module.exports = { sum, x };