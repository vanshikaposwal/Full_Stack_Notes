let names = ["Alice", "Bob", "Charlie"];

names.push("David"); // Adding an element at the end
names.push("Eve");
console.log("Names after push: " + names);

names.pop();
names.pop(); // Removing the last element
console.log("Names after pop: " + names);


names.unshift("Zara"); // Adding an element at the beginning
names.unshift("Yvonne");
console.log("Names after unshift: " + names);

names.shift();
names.shift();
// Removing the first element
console.log("Names after shift: " + names);

let index = names.indexOf("Bob");
console.log("Index of Bob: " + index);
console.log("Length of Names array: " + names.length);

// splicing the array

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

const removedFruits = fruits.splice(1, 3);
console.log("Fruits after splice: " + fruits);
console.log("Removed fruits: " + removedFruits);


// in splice 
// array.splice(startIndex, deleteCount, item1, item2, ...)
// - startIndex: The index at which to start changing the array.
// - deleteCount: The number of elements to remove from the array.
// - item1, item2, ...: The elements to add to the array, starting from startIndex.


const addedFruits = fruits.splice(2, 0, "Coconut", "Dragonfruit");
// 0 indicates no elements are removed
// new elements are added at index 2

console.log("Fruits after adding new fruits: " + fruits);
console.log(addedFruits);
console.log("Added fruits: Coconut, Dragonfruit");

const replacedFruits = fruits.splice(0, 2, "Apricot", "Blueberry");

// 2 indicates two elements are removed
// new elements are added at index 0
    
console.log("Fruits after replacing fruits: " + fruits);
console.log("Replaced fruits: " + replacedFruits);