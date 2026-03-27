const fs = require("fs");

setImmediate(() => {
    console.log("First Immediate cb");
})

setTimeout(() => {
    console.log("first timeout called");
}, 0);

Promise.resolve("Promise").then((val) => {
    console.log("Resolved ", val);
});

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("File reading CB");
})

process.nextTick(() => {
    process.nextTick(() => console.log("inner tick"));
    console.log("first next tick")
});

console.log("Last line");

// Expected
// Last line
// first next tick
// inner tick
// Resolved Promise
// first timeout called
// First Immediate cb
// File reading CB