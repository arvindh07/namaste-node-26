// timeout_vs_immediate.js
setImmediate(() => {
    console.log('immediate');
});
setTimeout(() => {
  console.log('timeout');
}, 0);
// timeout_vs_immediate.js
// const fs = require('node:fs');

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log('timeout1');
//   }, 0);
//   setImmediate(() => {
//     console.log('immediate1');
//   });
// });
// console.log("test");
