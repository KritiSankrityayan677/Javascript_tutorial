// const myArr = [0,1,2,3,4,5]
// console.log(myArr[2])

// Array Methods

/* myArr.push(6)
console.log(myArr)
myArr.pop() */

/* myArr.unshift(-2) // It will add the element at the start of the array and return the new length of the array.
console.log(myArr)
myArr.shift() // It will remove the first element of the array and return the removed element.
console.log(myArr)

console.log(myArr.includes(5)) // It will return true if the element is present in the array otherwise it will return false.

const newarr = myArr.join() // It     convert the array into a string.
console.log(newarr)
console.log(myArr) */


// Slice and Splice
/*console.log("A", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C", myArr)*/



/* So the difference  between Slice and Splice is not just ki in splice the end value is also including 
it's that ki in splice the whole values will be removed from the original array. */

// const marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"]
// const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) // It will add the whole dc_heroes array as a single element in the marvel_heroes array.
// console.log(marvel_heroes[6][3])

// marvel_heroes.concat(dc_heroes) // It will add the whole dc_heroes array as a single element in the marvel_heroes array but it will not change the original marvel_heroes array.
// console.log(marvel_heroes)
// push pushes in the existing array while concat returns a new array .

// const all_new_heroes= [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes) // It will spread out the elements  of both arrays.

// const myarr= [1,2,3, [4,5,6,7], [8,9,10,[11,12,13,14]]]
// const another_arr = myarr.flat(Infinity) // It will flatten the array to a single level. You can also give the depth of the array accordiing to your requiremnt.
// console.log(another_arr)

// console.log(Array.isArray("Kriti"))
// console.log(Array.from("Kriti")) // It will convert the string into an array of characters.
// // If you want to make array from a dictionary you need to specify the key and value in the array.from() method. It will return an array of arrays with key and value pairs.
// console.log(Array.from({a:1, b:2, c:3})) 

let s1 = 30
let s2 = 50
let s3 = 10

console.log(Array.of(s1,s2,s3))
