const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 6;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Password 1 done");
})
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Password 2 done");
})
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Password 3 done");
})
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Password 4 done");
})
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Password 5 done");
})
console.log("size ", process.env.UV_THREADPOOL_SIZE);