"use strict";//treat all JS code as newer version

//alert(3+3)//WE ARE using nodejs, not browser

console.log(3+3) ; console.log("hello")//although
//the code is executable but the code readability has been ruined
// avoid using ; in JS
//code readability should be high
console.log(3+
    3)//not a good example of good readable 
//code

//javascript does not have too many datatypes

let name = "hitesh"
let age =18
let isLoggedIn = false
//primative datatypes:
//number => 2 ^53
//bigint//used only for very large numbers like for
//trading , facebook type websites with need for large numbers etc.
//string=""
//boolean=>true/false
//null //standalone value
//undefined => when value is not defined but variable 
//is defined
// symbol //used to find if value unique// used greatly in 
// react, figma tools etc

//Object:
console.log(typeof null);
console.log(typeof undefined);

//when using typeof null   the value returned is object
// when using typeof undefined the value returned is undefined
// imp in interview questions
