//function
function sayMyName(){
    console.log("A")
    console.log("H")
    console.log("M")
    console.log("E")
    console.log("D")
}
//sayMyName()

function addTwoNumbers(number1,number2){
    let result = number1+number2
    return result
    console.log("Ahmed")
}
const result = addTwoNumbers(3,5)
// console.log(result)

function loginUserMessage(name="sam"){
    //sam is default value if no name given when calling the function 
    if(!name){
        // console.log("Please enter a user name")
        return
    }
    return `${name} just logged in`
}
let reuslt=loginUserMessage("Ahmed")
// console.log(reuslt)
//when we do not know the number of parameters we are expecting


//rest operators
function calculateCartPrice(val1,val2,...num){
    return num
}
console.log(calculateCartPrice(1,2,3,400,200))
//1,2 went into val 1 val2 and the rest went into the array


const user={
    username: "Ahmed",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)
//can also pass direct object 
handleobject({
    username:"sam",
    price:990
})
//people prefer typescript beacause it is easier in it to check type
//it can also be done in java but it just takes some extra code

const myNewArray=[200,400,100,600]
function returnSecondValue(aray){
    return aray[1]
}
console.log(returnSecondValue(myNewArray))