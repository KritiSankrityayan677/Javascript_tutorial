"use scrict"; // treat all js code as newer version of js

// alert(3+3) // we are using node.js here not browser so alert will not work here

let name = "kriti" // it is a string data type
let age = 18 // it is a number data type
let isLoggedIn = true // it is a boolean data type

// null and undefined are also data types in js but null is a standalone value in itself that tells this variable isn't undefined it is empty.
// symbol -> For uniqueness
// object

console.log(typeof null)
// Type of null is "object" but type of undefined is "undefined" 

/*We have data types based on the way they can be accessed and manipulated. There are two types of data types in js
1. Primitive data types -> string, number, boolean, null, undefined, symbol, Bigint (They all can be called by value).
2. Reference data types -> object, array, function (They all can be called by reference).*/


/* Let's see how memory allocation has been done in JavaScript: There are two types of memory allocation , Stack and Heap.
Stack is used for primitive data type and heap is for non primitive data type.
*/