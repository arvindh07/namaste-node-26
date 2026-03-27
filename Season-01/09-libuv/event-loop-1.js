const fs = require("fs");

const a = 100;

setImmediate(() => {
    console.log("Immediate cb");
})

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("File read successfully");
})

setTimeout(() => {
    console.log("Set timeout called");
}, 0);

function printA() {
    console.log("A = ", a);
}

printA();
console.log("Last line");

// Expected
// A = 100
// Last line
// Set timeout called
// Immediate cb
// File read successfully