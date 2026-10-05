/*console.log(2>3) // it will return false because 2 is not greater than 3
console.log(2<3) // it will return true because 2 is less than 3
console.log(2>=3) // it will return false because 2 is not greater than or equal to 3
*/

console.log (null > 0)
console.log (null == 0)
console.log (null >= 0)

/* The comparison and equality operators work differently. Comparison (>, <, >=. <=)  converts null  to a number, treating it as 0.
That's why  null >= 0 is true but null  > 0  is false. But the equality operator (==) does not convert null to a number, so null == 0 is false. 
But for undefined, both comparison and equality operators behave similarly and both  return false. */

// strict check ===
// It doesn't check only values it also checks for the data type of the variable. 

console.log(2 === "2")

