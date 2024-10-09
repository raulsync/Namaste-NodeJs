console.log('This is very important javascript code');
console.log(module.exports);
//Initially module.exports is empty object

//require("./path");
//when we use required method then it wrap module content in function that is IIFE function

/*
(function (module, require) {
  //all content of module go here first then after nodejs give it to v8 Engine to execute;

  require("./path");
  function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == x) {
        return i;
      }
    }
    return NaN;
  }

  module.exports = {
    linearSearch,
  };

})((module.exports = {}));

*/

//this way done by internally when we use require any module , and module, require and other parameter provided by NodeJs && module.export is initially a empty object. when calling.
