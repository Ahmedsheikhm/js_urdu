//primative and nonprimative
//primative
//7 categories
//string,number,boolean,null,undefined,symbol,bigint

//referancetypty/nonprimative
//array,objects,functions
// call by value 
//call by refrence

//for symbol
const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

//bigInt
const bigNumer = 443533666363637734343434n
console.log(typeof(bigNumber))

//non primative (refrence)

//objects
let myObj  ={
    name: "ahmed",
    age: 25,
}
//functions
const myFunction = function(){
    console.log("hello World");
}
myFunction();