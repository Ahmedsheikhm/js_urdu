const user={
    username:"Ahmed",
    price:999,
    welcomeMessage:function(){
        //console.log(`${this.username}, welcome th the website`)
    }
}
//this// refers to the current context

user.welcomeMessage()
user.username ="sam"
user.welcomeMessage()

//console.log(this)

// chai()
// function chai(){
//     console.log(this)
// }


const hello = function(){
    console.log("ahmed")
}
//hello()

//arrow function

// const chai = function(){
//     let username="Ahmed"
//     console.log(this.username)
// }
const chai = ()=>{
    let username="Ahmed"
    //console.log(this)
}
//arrow function gives empty object for "this"
//functions decalaired and saved in variable
//can access information stored in "this" object
chai()

const addTWo=(num1,num2)=>{//normal arrow function
    return num1 + num2
}
//if curly bracket used we have to use "return"

//arrow functio//implicit return

const addThree=(num1,num2,num3)=>  num1+num2+num3
//no need for {} and return
console.log(addThree(1,2,3))
console.log(addTWo(44,55))
//another way
//const addThree=(num1,num2,num3)=>  (num1+num2+num3)// brackets are used for better understanding of the coder
//no need for return if () used
//() also used to retun object
//const addThree=(num1,num2,num3)=>  ({username:"ahmed",price:300,age:44})


