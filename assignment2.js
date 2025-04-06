//Declare the variables and constant
let a = 25;  // Variable a
let b = 20;  // Variable b
let c = 12;  // Variable c
let d = "15"; // Variable d (as a string)
const e = 15; // Constant e

//Display the sum of a, b, c, d, and e
let sum = a + b + c + parseInt(d) + e; 
console.log("Sum of a, b, c, d, and e: " + sum);

//Compare the values of d and e using relational operators
console.log("d > e: " + (parseInt(d) > e));  
console.log("d < e: " + (parseInt(d) < e));  
console.log("d >= e: " + (parseInt(d) >= e));
console.log("d <= e: " + (parseInt(d) <= e)); 
console.log("d === e: " + (parseInt(d) === e)); 

//Perform the requested operations and display the results
//Subtract all the declared variables (a - b - c - d - e)
let subtraction = a - b - c - parseInt(d) - e;
console.log("Subtraction of a, b, c, d, and e: " + subtraction);

// 4.2: Multiply a and c, then divide by e
let multiplicationAndDivision = (a * c) / e;
console.log("Multiplication of a and c divided by e: " + multiplicationAndDivision);

// 4.3: Display the exponent value of e raised to the power of c
let exponentiation = Math.pow(e, c);
console.log("Exponent of e raised to the power of c (e^c): " + exponentiation);

// 4.4: Reassign c to 3, then reassign this value to e, and display the result
c = 3;
const updatedE = c;  // Reassigning c (now 3) to a new variable updatedE
console.log("Reassigned value of constant e (now from c): " + updatedE);
