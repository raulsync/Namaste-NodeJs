const crypto = require("node:crypto");

var a = 875643;
var b = 7865;
console.log("Hello World");

//sync function block the main thread don't use it;
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512"); // this blocks the main thread //
console.log("first key is generated");

// async function
// pbkdf2 = password base key derivative function
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("Key is generated");
});

function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);
console.log("Multiplication result is : ", c);
