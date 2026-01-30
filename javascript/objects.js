// Objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "traveling", "swimming"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  },
  getFullName: function() {
    return "" + this.firstName + " " + this.lastName;
  }
};

// Accessing object properties
console.log(person.firstName); // John
console.log(person['lastName']); // Doe

// Accessing nested object properties
console.log(person.address.city); // Anytown
// address is another object inside person

// Accessing array elements
console.log(person.hobbies[1]); // traveling

// Calling object method
console.log(person.getFullName()); // John Doe

