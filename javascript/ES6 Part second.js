//destructuring objects

const user = {
    namee: "Alice",
    age: 30,
    city: "Wonderland",
    friends: ["Bob", "Charlie"],
    obj:{
        key1:"value1",
        key2:"value2"
    }
};

const {namee, age, city, friends, obj:{key1, key2}} = user;
// Here in objects we can destructure with matching the key names only

console.log(namee); // Output: Alice
console.log(age);  // Output: 30
console.log(city); // Output: Wonderland
console.log(friends); // Output: ["Bob", "Charlie"]
console.log(key1); // Output: value1
console.log(key2); // Output: value2



//  destructuring functions

function printUser({namee, age, city}) {
    console.log("Name: " + namee + ", Age: " + age + ", City: " + city);
}

console.log(printUser(user));

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Spread Operator (...)

//  split the array or object into individual elements

const colors = ["red", "green", "blue"];
const moreColors = ["yellow", "purple", "orange"];

// before using spread operator(...)
const allColors = [moreColors, colors];
console.log(allColors); 

// after using spread operator(...)
const allColorsWithSpread = [...moreColors, ...colors];
console.log(allColorsWithSpread);
// Output: ["yellow", "purple", "red", "green", "blue", "orange"]


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Rest Operator (...)

//  combine multiple elements into a single array or object

const newFruits = ["apple", "banana", "orange", "mango", "grape"];
const [firstFruit, secondFruit, ...remainingFruits] = newFruits;
console.log(firstFruit);  // Output: apple
console.log(secondFruit); // Output: banana
console.log(remainingFruits); // Output: ["orange", "mango", "grape"]

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Callback Functions

function greet(){
    console.log("Hello, World!");
}

function afternoonGreet(callback){
    callback();
    console.log("Good Afternoon, World!");
}

afternoonGreet(greet);


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Higher-Order Functions
//? Definition: A higher-order function that executes a provided function once for each array element.

// forEach
//? Data that we get from backend or API is mostly in the form of arrays and JSON format. 
// So, we can use forEach to iterate over the array and perform operations on each element.

const employees = [
    { name: "Alice", department: "Engineering", age: 28, role: "Developer" },
    { name: "Bob", department: "Marketing", age: 32, role: "Manager" },
    { name: "Charlie", department: "Sales", age: 25, role: "Representative" },
    { name: "David", department: "Engineering", age: 30, role: "Senior Developer" }
];

employees.forEach(emp => {
    console.log(emp.name);
    console.log(emp.department);
});
// It does not return output in array form
// We can not use return statement here
const employeeRoles = employees.forEach(emp => {
    return emp.role;
});
console.log(employeeRoles); // Output: undefined

// So , we use map function for that purpose

const employeeNames = employees.map(emp => emp.name);
console.log(employeeNames); // Output: ["Alice", "Bob", "Charlie", "David"]

const employeeAges = employees.map(emp => {
    return emp.age
});

console.log(employeeAges); // Output: [28, 32, 25, 30]

