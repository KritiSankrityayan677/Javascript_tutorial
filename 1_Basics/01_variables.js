const accountId = 13344556
let accountEmail = "kriti@google.com"
var accountPassword = "12345"
accountCity = "New York" // This is also  a way to define a variable in JS, it also takes a space of a variable in the memory but it is not a good practice.
let accountState // This is a variable that is declared but not initialized, so it will have the value of undefined.

// accountId = 2 // Not allowed because accountId is a constant

accountEmail = "hc@hdfc.com"
accountPassword = "21314471"
accountCity = "Los Angeles"
console.log(accountId);

/*If we can change the value of variables declared with let and var but why we need both let and var. 
Because var is function scoped and let is block scoped. So, if we want to declare a variable that is only accessible within a specific block of code, 
we should use let. If we want to declare a variable that is accessible throughout the entire function, we should use var. Prefer not to use var in modern Javascript*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
