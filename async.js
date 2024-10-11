const fs = require('fs');
const https = require('https');

console.log('hello world');

var a = 708327;
var b = 28733;

//sync file system

// fs.readFileSync('./file.txt', 'utf8'); //never use this for read file it is block the main thread when execution
// console.log('block thread');

//async code
fs.readFile('./file.txt', 'utf8', function (err, data) {
  if (err) {
    console.log('error is : ', err);
  } else {
    console.log('file data', data);
  }
});

https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
  console.log('fetched data successfully');
});

setTimeout(() => {
  console.log('Inside SetTimeout');
}, 5000);

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

var c = multiply(a, b);

console.log('result : ', c);
