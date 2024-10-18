//const discriptor = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(discriptor)
/*this was the output for discriptor
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/
//creating an object 
const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true
}
console.log(chai)
//chai is an object whereas name,price and isAvailable are properties

//defining properties
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
const discrptor= Object.getOwnPropertyDescriptor(chai,"name")
console.log(discrptor)
//ObjectgetOwnDescriptor  allows us to get the writable,enumerable properties of owr objects properties
//defineProperty allows us to define the writable,enumerable etc of each propert of an object
