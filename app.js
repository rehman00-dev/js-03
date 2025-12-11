//  Q1: City Name
// var place = prompt("Enter your city name");

// if (place === "karachi") {
//   console.log("Welcome to city of lights");
// }

// Q2: Gender Greeting
// var gender1 = prompt("Enter your gender");

// if (gender1 === "male") {
//   console.log("Good morning Sir");
// } else if (gender1 === "female") {
//   console.log("Good morning Ma'am");
// }

//  Q3: Traffic Signal
// var signal = prompt("Enter your traffic signal colour");

// if (signal === "red") {
//   console.log("Must Stop");
// } else if (signal === "yellow") {
//   console.log("Ready to move");
// } else if (signal === "green") {
//   console.log("Move now");
// }

// // Q4: Fuel Check
// var Liter = prompt("Enter your remaining fuel in car (in liters)");

// if (Liter < 1) {
//   console.log("Please refill your fuel tank");
// }

// // Q5: Simple condition check

// a

// var a = 5;
// if (a == 5) {
//   alert("Given condition for variable a is true");
// }
//  IT IS TRUE

//b

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
//NOT TRUE

// c
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
//  IT IS TRUE
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// NOT TRUE
// if (c === 14) {
//   alert("condition 4 is true");
// }
//   IT IS TRUE

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
//  IT IS TRUE

// e.
// if (true) {
//   alert("True");
// }
//  IT IS TRUE
// if (false) {
//   alert("False");
// }
//NOT TRUE

// f.
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }
// IT IS TRUE


// Q6 : Mark sheet

// var m1 = prompt("Enter marks of math.")
// var m2 = parseFloat(prompt("Enter marks of physics:"));
// var m3 = parseFloat(prompt("Enter marks of urdu:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));

// // Calculations
// var obtained = m1 + m2 + m3;
// var percentage = (obtained / totalMarks) * 100;

// // Grade & Remarks
// var grade, remarks;

// if (percentage >= 80) {
//   grade = "A";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "B";
//   remarks = "Very Good";
// } else if (percentage >= 60) {
//   grade = "C";
//   remarks = "Good";
// } else if (percentage >= 50) {
//   grade = "D";
//   remarks = "Satisfactory";
// } else {
//   grade = "F";
//   remarks = "Needs Improvement";
// }

// document.write("<h2>Result</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");

// Q7

// var a = 3;
// var prompt = prompt("guess a secret number");
// if (a == prompt) {
//   alert("Bingo! Correct answer");
// }
// else if (++a == prompt) {
//   alert("Close enough to the correct answer");
// }

// Q8

// var prompt = prompt("Enter a number");
// if (prompt % 3 == 0) {
//   alert(" It is divisible by 3")
// }
// else if (prompt % 3 != 0) {
//   alert("It is not divisible by 3")
// }

// Q9

// var prompt = prompt("Enter a number");
// if (prompt % 2 == 0) {
//   alert(" It is even")
// }
// else if (prompt % 2 != 0) {
//   alert("It is odd number")
// }

// Q10

// var temp = prompt("Enter Temperature");

// if (temp > 40) {
//   alert("It is too hot outside.");
// }
// else if (temp > 30) {
//   alert("The Weather today is Normal.");
// }
// else if (temp > 20) {
//   alert("Today’s Weather is cool.");
// }
// else if (temp >= 10) {
//   alert("OMG! Today’s weather is so Cool.");
// }

// Q11

// var num1 = Number(prompt("Enter first number:"));
// var num2 = Number(prompt("Enter second number:"));
// var op = prompt("Enter operation (+, -, *, /, %):");

// if (op === "+") {
//   alert("Result: " + (num1 + num2));
// }

// if (op === "-") {
//   alert("Result: " + (num1 - num2));
// }

// if (op === "*") {
//   alert("Result: " + (num1 * num2));
// }

// if (op === "/") {
//   if (num2 === 0) {
//     alert("Error: Cannot divide by zero!");
//   } else {
//     alert("Result: " + (num1 / num2));
//   }
// }

// if (op === "%") {
//   alert("Result: " + (num1 % num2));
// }







