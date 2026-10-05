let mydate = new Date() // it's an object, it  has many functions and properties that can be used to manipulate date and time in js. 
console.log(mydate)

let mycreateddate = new Date(2024, 0, 24) // In js months start from 0 to 11. So, 0 is January and 11 is December. It will create a date object with the given date and time.
console.log(mycreateddate.toDateString())
console.log(mycreateddate.toLocaleString())
console.log(mycreateddate.getTime())

