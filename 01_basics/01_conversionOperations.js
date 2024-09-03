let score = "33"
//let score ="33aa"// even though this is not a correct number,
//it will be converted into a number 
//when in the back end we are quite sure that the variable score
//is a number 33
//but if we request a value for a variable from the front end we are not sure that the number 33 we received is 
//a string or number. as the 33 could have had been sent through a form of string
console.log(typeof score)//will return string
let valueInNumber = Number(score);//guaranteed score has been converted to 
// a number and stored in valueIn Number
console.log(typeof valueInNumber)
console.log(valueInNumber)
let vv = Number("33");//converted to number 
console.log(typeof vv) 

let booleanIsLoggedIn = Boolean(isLoggedIn)
