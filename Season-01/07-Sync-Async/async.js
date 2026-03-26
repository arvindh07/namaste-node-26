const https = require("https");
const fs = require("fs");

let a = 85148;
let b = 21885;

setTimeout(() => {
    console.log("Calling set tiemmout after 5 seconds");
}, 0);

https.get("https://dummyjson.com/test", (res) => {
    res.resume();
    console.log("Fetched Data");
})

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("Data read successfully ", data);
})

function multiply(a, b) {
    return a * b;
}
let c = multiply(a, b);
console.log("Result is ", c);