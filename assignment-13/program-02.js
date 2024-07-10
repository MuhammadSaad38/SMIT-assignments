// 2.Write a js program to find diameter, circumference and area of circle using functions.
// Prompt user to enter the radius
const radius = parseFloat(prompt("Enter the radius of the circle: "));

// Function to calculate the diameter of a circle
function calculateDiameter(radius) {
    return 2 * radius;
}

// Function to calculate the circumference of a circle
function calculateCircumference(radius) {
    const pi = 3.14159; // Approximate value of π
    return 2 * pi * radius;
}

// Function to calculate the area of a circle
function calculateArea(radius) {
    const pi = 3.14159; // Approximate value of π
    return pi * (radius * radius);
}
// Prompt user to choose what to calculate
const choice = parseInt(prompt("What would you like to find? Enter the number:\n1. Diameter\n2. Circumference\n3. Area"));

if (radius > 0) {
    if (choice === 1) {
        console.log("Diameter: " + calculateDiameter(radius));
    } else if (choice === 2) {
        console.log("Circumference: " + calculateCircumference(radius));
    } else if (choice === 3) {
        console.log("Area: " + calculateArea(radius));
    } else {
        console.log("Invalid choice. Please enter 1, 2, or 3.");
    }
} else {
    console.log("Please enter a valid positive number for the radius.");
}


//----------------------------------Self Doing----------------------------------------------
// // 2.Write a js program to find diameter, circumference and area of circle using functions.

// function findDiameter(r){
//     var d = 2 * r;
//     console.log(`Diameter of Circle is ${d} cm.`);
// }
// function findCircumference(r,pi) {
//     var C = 2 * pi * r;
//     console.log(`Circumference of Circle is ${C} cm.`);
// }
// function findArea(r,pi) {
//     var A = pi * r ** 2;
//     console.log(`Area of Circle is ${A} cm².`);
// }
// var r = 25;
// var pi = 3.14159;
// var askUser = 3;
// if (askUser==1) {
//     findDiameter(r);
// } else if (askUser==2) {
//     findCircumference(r, pi);
// }else if (askUser==3) {
//     findArea(r, pi);
// }else{
//     console.log("You enter a wrong number.");
// }








