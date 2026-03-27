// QUESTION 1

// console.log("Start");

// process.nextTick(() => {
//     console.log("nextTick 1");

//     process.nextTick(() => {
//         console.log("nextTick 2");
//     });

//     Promise.resolve().then(() => {
//         console.log("promise inside nextTick");
//     });
// });

// Promise.resolve().then(() => {
//     console.log("promise 1");

//     process.nextTick(() => {
//         console.log("nextTick inside promise");
//     });
// });

// setTimeout(() => {
//     console.log("timeout");
// }, 0);

// console.log("End");

/** 
 * Start
End
nextTick 1
nextTick 2
promise 1
promise inside nextTick
nextTick inside promise
timeout
*/

// QUESTION 2
// const fs = require("fs");

// console.log("Start");

// // p1
// setTimeout(() => {
//     console.log("Timeout 1");

//     // nt2
//     process.nextTick(() => console.log("nextTick inside timeout"));

//     // pr2
//     Promise.resolve().then(() => console.log("promise inside timeout"));

// }, 0);

// // p3
// setImmediate(() => {
//     console.log("Immediate 1");
// });

// // p2
// fs.readFile(__filename, () => {
//     console.log("File read");

//     // nt3
//     process.nextTick(() => console.log("nextTick inside I/O"));
//     // pr3
//     Promise.resolve().then(() => console.log("promise inside I/O"));
//     // p3-1
//     setImmediate(() => console.log("Immediate inside I/O"));
// });

// // nt1
// process.nextTick(() => console.log("nextTick 1"));

// // pr1
// Promise.resolve().then(() => console.log("promise 1"));

// console.log("End");

/**
 * Start
 * End
 * nextTick 1
 * promise 1
 * Timeout 1
 * nextTick inside timeout
 * promise inside timeout
 * Immediate 1
 * File read
 * nextTick inside I/O
 * promise inside I/O
 * Immediate inside I/O
 */

const fs = require('node:fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});