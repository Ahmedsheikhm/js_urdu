// let MyName="Ahmed     "
// console.log(myName.truelength)

// let myHeros =["thor","spiderman"]
// let heroPower = {
//     thor:"hammer",
//     spiderman:"web shooting",
//     getSpiderPower:function(){
//         console.log(`spidy power is ${this.spiderman}`)
//     }
// }
// Object.prototype.hitesh=function(){
//     console.log(`hitesh is present in all objects`)
// }
//heroPower.hitesh()// added  property of hitesh to all objectcs as a default
//myHeros.hitesh() // added  property hitesh to all arrays as arrays also has prototype
//of objects

//(function,Array,string   all pass through object)
//thus by adding the property "hitesh" to all objects they get added 
//to all arrays and strings as well as they are created through the object
//as object is the top level of hierarchy

// Array.prototype.heyAhmed=function(){
//     console.log(`Hey Ahmed`)
// }
//heroPower.heyAhmed() if the property is added to the array 
// property not added to the object wheras if property is added to Object
//value added to function, Array,string
//if propert added to array it will only ve for that array. not for string or function
//same for the rest
//however if value added to the object the property gets added to arrray,function and the string 


//Inheritance
const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TAsupport ={
    makeAssignment:'Js assignment',
    fullTime:true,
    __proto__:TeachingSupport  //prototypal inheritance
}
Teacher.__proto__ = User //prototypal inheritance  //this type is slightly oputdated but can be used

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)//teaching support inherits the properties of teacher as well

let anotherUserNAme = "chaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
   // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUserNAme.trueLength()
"Ahmed                ".trueLength()
"IcedTea                       ".trueLength()