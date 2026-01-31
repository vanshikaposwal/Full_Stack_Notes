// All about ES6 Mordern JavaScript

// Equality Operators in JavaScript

let num1 = 10;
let num2 = "10";

if(num1 == num2){
    console.log("😊 correct");
} else {
    console.log("😒 incorrect");
}
// Using loose equality (==) to compare a number and a string
// The output will be "😊 correct" because loose equality performs type coercion
// and considers both values equal after converting the string "10" to the number 10.



// so now using strict equality(===) was introduced

if(num1 === num2){
    console.log("😊 correct");
} else {
    console.log("😒 incorrect");
}
// Using strict equality (===) to compare a number and a string
// The output will be "😒 incorrect" because strict equality does not perform type coercion
// and considers the values different due to their different types (number vs string).



// DESTRUCTURING IN JAVASCRIPT

// Array Destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor);  // Output: blue

const person = ["John", "Doe", 25, "New York"];
const [firstName,lastName,,city] = person;
console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(city); 