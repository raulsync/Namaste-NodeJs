var a = 'namaste Backend';

var b = 10;

var c = 20;

console.log(a);
console.log(b);

// console.log(global); // it is part of node environment

// console.log(this); // it prints empty object

// console.log(window);  this is not present in node environment

console.log(globalThis); // it is standard global object that supports browser, node-environment,web-workers

console.log(globalThis === global);
