/*let score = "44"
console.log(typeof score);
console.log(typeof (score));

let vin = Number(score)
console.log(typeof vin);
// You might have seen that with console.log we are closing the line with a semicolon but we can also write it without semicolon.
*/

/*let score = "44abc"
console.log(typeof score);
console.log(typeof (score));

let vin = Number(score)
console.log(typeof vin);
*/

// But when you try to print the vin it will show NaN which means not a numbe rbut we just converted a string to a number , so this happens a lot you need to take care of it.
/*
"33" -> 33
"33abc" -> NaN
undefined -> NaN
true/false -> 1/0

We can also convert a number to a string using String() function and we can also convert a number to a boolean using Boolean() function and vice versa.
For a empty  string it will return false and for a non empty string it will return true.
*/

let somenumber = 33

let somestring = String(somenumber)
console.log(somestring)
console.log(typeof somestring)

// ********************************************Operations*******************************************************

console.log(5+5)
console.log(5-5)
console.log(5*5)
console.log(5%5)

let str1 = "Kriti"
let str2 = "Pandey"
//let str3 = str1 + " " + str2
console.log(str1 + " " + str2)


console.log("2" + 2) // it will return 22 because it is a string and when we add a number to a string it will convert the number to a string and then concatenate it with the string.
console.log("2" + 1+ 1) // it will return 211 
console.log( 2 +1 + "1") // it will return 31 because it will first add the numbers and then convert the result to a string and then concatenate it with the string.


// You can refer to ECMA scripts for more information.

console.log(+true) // it will return 1 because true is converted to 1