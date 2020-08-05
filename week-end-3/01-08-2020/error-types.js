// uncaught error

//It is a very common error when working with object and array to get a
 //TypeError: Cannot read property 'name' of undefined . 
 //This happens when we try to access a property of a value that is undefined or null in JavaScript
 var obj = {};
console.log(obj.prop1.deepProp);//Uncaught TypeError: Cannot read property 'deepProp' of undefined


//TypeError: ‘undefined’ is not an object (evaluating
//This is an error that occurs in Safari when you read a property or call a method on an undefined object
var obj = {};
console.log(obj.prop1.deepProp);// TypeError: ‘undefined’ is not an object (evaluating


//type error null is not an object
// in JS undefined and null are different when the object is null and we try to 
// call a property of it it throws null is not an object error
var obj = null;
console.log(obj.prop1.deepProp); // type error null is not an object

//(unknown): Script error

//errors that bubble up to the window.onerror handler, instead of being caught in try-catch
// will get reported as simply "Script error" instead of containing useful information. 

//TypeError: Object doesn’t support property
//This is an error that occurs in IE when you call an undefined method.
// You can test this in the IE Developer Console.

this.functionName();//this syntax is workable in all the browsers except IE

//for IE  workable syntax is ,say Myclass is a class name 
Myclass my;
my = new Myclass()
my.functionName();

// TypeError: ‘undefined’ is not a function
// This is an error that occurs in Chrome when you call an undefined function. 

//when we call a function which is not deined for that object then it throws this error
function clearBoard(){
    alert("Cleared");
  }
  
  document.addEventListener("click", function(){
    this.clearBoard(); // what is “this” ?
  });

//   Uncaught RangeError
// This is an error that occurs in Chrome under a couple of circumstances. 
// One is when you call a recursive function that does not terminate.
// It may also happen if you pass a value to a function that is out of range. 
// Many functions accept only a specific range of numbers for their input values. 


var a = recurse(10)
function recurse(a){
    recurse (a)
}

// TypeError: Cannot read property ‘length’
// This is an error that occurs in Chrome because of reading length property for an undefined variable

var testArray= ["Test"];

//function parameter testArray is undefined since we are not passing any values when we call it
function testFunction(testArray) {
    for (var i = 0; i < testArray.length; i++) {
      console.log(testArray[i]);
    }
}
//function parameter testArray is undefined since we are not passing any values when we call it.
//eventhough we have global object named testArray it takes the preference of local one 1st
testFunction();


// Uncaught TypeError: Cannot set property
// When we try to access an undefined variable it always returns undefined 
// and we cannot get or set any property of undefined.

var obj = undefined
obj.value = 'value'// throws an error- cant set property 


// ReferenceError: event is not defined
// This error is thrown when you try to access a variable that is undefined
//  or is outside the current scope.  

document.addEventListener("mousemove", function () {
    console.log(event);
  })//we get event is not defined error