const coding =[ "js","ruby","java","python","cpp"]

//normal function like "function name(Parameters){}"
//using foreach in an array causes eash value in the array to directly be put in the parametere
//since it is a call back function it does not need a name
//below is an  example
coding.forEach( function (item){
    // console.log(item);
})

// another variation using arrow function
coding.forEach((item)=>{
    // console.log(item)
})

//another way// passing function 
//only need to give refrence of teh function when passing in foreach
//not to execute the function
//correct : item, incorrect: item()
function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)

//foreach not only gets the value, it also receives the index, and whole array as well

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr)
})

//objects within array is a quite common scenario
//[{},{},{}]
//accessing object in array iteratively below
const myCoding=[{
    languageName:"javascrypt",
    languageFileName:"js"
},
{
    languageName:"javas",
    languageFileName:"java"
},
{
    languageName:"python",
    languageFileName:"py"
}
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})