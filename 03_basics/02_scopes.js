

//{}//scope when with function, if else loop etc.

// if(true){
//     let a=10
// const b=20      block scope
// var c=30
// }

if(true){
         let a=10
     const b=20      
     var c=30
    }
//console.log(a)
//console.log(b)
console.log(c)

function one(){
    const username="ahmed"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website);

    two()
    //closure , child function can access parent function
} 
one()

/////////////
//hoisting
console.log(addone(5)) //no error when executing  addone before declaration
//
function addone(num){
    return num+1
}

console.log(addtwo(5))// error will be given as cannot be run befor the function
//all depends on the way the function is declared
const addtwo = function(num){
    return num+2

}


