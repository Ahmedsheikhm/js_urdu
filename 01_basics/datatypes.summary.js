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

///////////////////////////////////////////////
stack and heap memory
//memory control reduced in modern languages
//imp for interview
//primative
//non primative (refrence type)

//two types of memories(Stack and heap)
//all primative datatypes use stack(copy of original value)
//all refrence datatype uses heap(refrence given to original value)
 

//primative datatypes using stack

const value1 =100
const value2 =value1;
const value2 =200;
// the value for value1 will remain 100 and the value for value2 will be 200


//non primative(refrencetype datatypes ) will use the heap
let value1 = {
   name:"ahmed",
   age:19,
}
let value2=value1;
//value1 and value2 both now point to the same refrence
value2.name = "mahad";
//doing this causes value1 and value2 to both have {
  name:"mahad",
  age:19,
}
since both refrence the same object