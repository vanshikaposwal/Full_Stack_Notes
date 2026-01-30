console.log(" This is my first JavaScript code! ");
var name = "Vanshika";
var age = 20;
// var data type was used erlier but not used now
// because of the problem of scope
// So let and const are used now
let city = "New York";
const country = "USA";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);
console.log("Country: " + country);


//  Functions in java script

// Different types of functions

// 1. Normal function
function greet() {
    return "Good Morning!";
}
console.log(greet());

// 2. Variable function
let sayHello = function() {
    return "Hello there!";
}
console.log(sayHello());

// 3. Arrow function
let add = (a, b) => {
    return a + b;
}
console.log("Sum: " + add(5, 10));

const morning = (name) => {
    return "Good Morning, " + name + "!";
}

// 4. Anonymous function

sayHello(function() {
    console.log("This is an anonymous function!");
});

// sayHello() is already a function defined above and another function is passed inside its parameter
// So this is called an anonymous function because it has no name and is defined inside another function


// Arrays in JavaScript
// In javaScript, arrays are dynamic and can hold multiple data types
// In JS arrays are homogeneous as well as heterogeneous

let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "Hello", true, 3.14, null];

console.log("Numbers Array: " + numbers);
console.log("Mixed Array: " + mixedArray);
console.log(numbers.length); // Length of the array

let firstNames = ["Alice", "Bob", "Charlie"];
console.log("First Names: " + firstNames);

let lastNames = ["Smith", "Johnson", "Williams"];
console.log("Last Names: " + lastNames);

// Merging two arrays using concat() method
let fullNames = firstNames.concat(lastNames);
console.log("Full Names: " + fullNames);