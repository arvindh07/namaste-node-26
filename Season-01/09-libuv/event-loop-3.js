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
    setTimeout(() => {
        console.log("second timeout called");
    }, 0);

    process.nextTick(() => console.log("second next tick"));

    setImmediate(() => {
        console.log("Second Immediate cb");
    })
    console.log("File reading CB");
})

process.nextTick(() => console.log("first next tick"));

console.log("Last line");

// Expected
// Last line
// first next tick
// Resolved Promise
// first timeout called
// First Immediate cb
// File reading CB
// second next tick
// Second Immediate cb
// second timeout called