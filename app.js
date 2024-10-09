// import { linearSearch } from './searching.js';
// import { calculateSum, x } from './sum.js';

var a = 'namaste Backend';
var b = 10;
var c = 20;

// const obj = require('./sum.js');

// this doesnt give error bcz in cjs module we have writen code in non strict mode while in es6 module it gives error because of strict mode

// d = 'hello World';

// console.log(d);

const { calculateSum, calculateMultiply } = require('./calculate');

console.log(a);
console.log(b);

calculateSum(b, c);
calculateMultiply(b, c);

// console.log(x);

require('./xyz'); // this way we can use other module

// console.log(global); // it is part of node environment

// console.log(this); // it prints empty object

// console.log(window);  this is not present in node environment

// console.log(globalThis); // it is standard global object that supports browser, node-environment,web-workers

// console.log(globalThis === global);

const { linearSearch } = require('./calculate');

const arr = [1, 2, 5, 6, 7, 9];

console.log(linearSearch(arr, 9));

const data = require('./data.json');
console.log(data);
