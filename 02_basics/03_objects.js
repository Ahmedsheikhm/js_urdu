//very important ***
//objects
//singleton
//object.create //created object through constructor method// singleton made in this

const mySym  = Symbol("key1")//declaring symbol
//object literals// way to declare objects
//ojects always about key and value
const jsUser = {
    name:"Ahmed",
   // mySym:"myKey1",//notcorrect way to use symbol
   [mySym]:"myKey1",//correct symbol decleration 
   age:24,
    location:"karachi",
    email:"Ahmed@gmail.com",
    isLoggedIn:"false",
    lastLoggedInDays:["Monday","Saturday"],
    "full name":"sheikh Ahmed"
}
//accessing objects
console.log(jsUser.email)
console.log(jsUser["email"])//as object saves the key as string
//so js["email"] need to be in double quaotes as a string

//for "full name" we cannot access through 
//jsUser.full name   due to the space in the key
console.log(jsUser["full name"]) 
//console.log(jsUser.full name) will not work
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])

jsUser.email ="ahmed@hotmail.com"
console.log(jsUser.email)
//Object.freeze(jsUser) used to freeze object to help avoid propogation of changes to the object
jsUser.email="jjj@gmail.com"
console.log(jsUser.email)
console.log(jsUser)

//functions treated as variables
//
jsUser.greetig = function(){
    console.log(`hello JS user,${this.name}`)
}
console.log(jsUser.greetig())

//mostly value is accessed through jsUser.age
//sometimes Jsuser[mySym] for symbols
//or Jsuser["full name"] for keys with space inbertween
