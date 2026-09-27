// We can use single quotes or double quotes to define a string in js. We can also use backtick for string interpolation. Backtick is also used to define multi-line strings in js.
name = "Kriti Pandey"
age = 23
role = "SDE AI"
console.log(`My name is ${name}, I am ${age} years old and I works as ${role} in Drage CPA.`) // This is called string interpolation.

const myname= "Kriti Pandey"
const mynewname = new String("Kriti Pandey") // This is called string object. It is not a primitive data type. It is a reference data type.

console.log(typeof myname)
console.log(typeof mynewname)

/* String primitive → a simple string value
Object → a container that can hold properties and methods */

console.log(mynewname.length)
console.log(mynewname.toUpperCase())
console.log(mynewname.charAt(4))
console.log(mynewname.indexOf("P"))

const anotherstring = mynewname.substring(0,6) // It will return the string from index 0 to index 6 (not including 6)
console.log(anotherstring)
const anotherstring2 = mynewname.slice(-8,-4) // It will return the string from index -8 to index -4 (not including -4)
console.log(anotherstring2) // We can give negative index onlly in slice method.
const anotherstring3 = "      Kriti        "
console.log(anotherstring3.trim()) // It will remove the white spaces from the start and end of the string.
// You can refer to mdn web docs for more string methods. There are many string methods available in js. And that'll help you.
