
// 1. Find the button
let button = document.getElementById("myButton");
// 2.Find the heading
let heading = document.getElementById("greeting");
// 3. Add event listener to the button
// Events are the activities that user does on the webpage like clicking, hovering, scrolling etc.
// When the button is clicked, change the text of the heading
button.addEventListener("click", function() {
    heading.textContent = "Button Clicked!!!";
    // Here this function is callback function because it's called inside the event listener when the event occurs (also a predefined function).
});



// to print something in the console
console.log(" This is my first JavaScript code! ");