console.log("Hello from setTimeoutZero");
var a = 102455;
var b = 8768;

function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);
console.log("Multiplication is : ", c);

//this callback will only push into v8 engine call stack only when call stack is empty

setTimeout(() => {
  console.log("Inside setTimeout Zero");
}, 0);

setTimeout(() => {
  console.log("call me after 3 seconds");
}, 3000);
