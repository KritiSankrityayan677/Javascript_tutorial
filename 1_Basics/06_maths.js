/*const score = 100
console.log(typeof score)
const balance = new Number(500) // This is called number object. It is not a primitive data type. It is a reference data type.
console.log(typeof balance)
// Number object conatins many methods and properties that can be used to manipulate numbers in js.
console.log(balance.toString().length);
console.log(balance.toFixed(3));// It will return the number with 3 decimal places. I want exactly n digits after the decimal point.

const other_number = 3241.9074032
console.log(other_number.toPrecision(4)) // It will return the number with 4 significant digits. I want exactly n significant digits in the entire number.
const hundreds = 100000
console.log(hundreds.toLocaleString("en-IN")) // It will return the number in Indian format. We can also use other locales like "en-US", "de-DE" etc. */

// ------------------------ Maths --------------------
console.log(Math);
console.log(Math.abs(-90));
console.log(Math.round(4.5)); // It will return the number rounded to the nearest integer.
console.log(Math.ceil(4.8)); // It will return the smallest integer greater than or equal to the number.
console.log(Math.floor(4.1)); // It will return the largest integer less than or equal to the number.

const min= 10
const max= 20

console.log(Math.floor(Math.random()*(max-min+1))+ min)