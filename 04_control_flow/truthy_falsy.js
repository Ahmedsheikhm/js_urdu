const userEmail ="Ahmed@gmail.com"
if(userEmail){
    console.log(`user email received it is ${userEmail}`)
}else{
    console.log("dont have user email")
}
/*
falsey values
false, 0, -0,BigInt 0n,"",null,undefined,NaN
*/
//rest are truthy values
//examples of thruthy
//"0","fasle"," ",[],{},function(){}

//to check if array is empty
const array1 = []

if(array1.length===0){
    console.log("empty")
}
//tocheck if object is empty
const obj = {}
if(Object.keys(obj).length===0){
    console.log('Empty')
}

//Nullish Coalescing Operator(??):nnull undefined
let val1,val2;
//val1=5??10
val1= null?? 10
//if value id=s there tha it is ok. otherwise null will be assigned
//same for undefined
//but for two values
//val1=12??10//12 will be assigned as it is the first value

//same can be done for multiple values
val2=undefined??78??990
//the first value will be assigned 78 if the vairable receives the value
//it is a fall back
console.log(val1)


//Terinary operator
/*
condition ? true : false
*/

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
