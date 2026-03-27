const fs = require("fs");
const a = 100;

setImmediate(() => {
    console.log("Immediate cb");
})

Promise.resolve("Promise").then((val) => {
    console.log("Resolved ", val);
});

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("File read successfully");
})

setTimeout(() => {
    console.log("Set timeout called");
}, 0);

process.nextTick(() => console.log("next tick"));

function printA() {
    console.log("A = ", a);
}

printA();
console.log("Last line");

// Expected
// A = 100
// Last line
// next tick
// Promise resolved
// Set timeout called
// Immediate cb
// File read successfully