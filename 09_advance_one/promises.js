/*/alots of promises
//we will create promises but mostly we will be consuming promises
//there are multiple types of promises
//promise is an object representing eventual completion
//Q and bluBird when promises were not available (the original liabrary for fetch)
const promiseOne = new Promise((resolve,reject)=>{
    //Do an async tast
        //DB calls, cryptography related, network call
        setTimeout(function(){
     //       console.log('Async tast is complete');
        },3000)
        resolve()//adding this after /
        //now connected to the whole .then
})

//".then" direct connection with resolve
promiseOne.then(function(){
   // console.log("Promise consumed")
})//this promise was never completed
//the resolve and .then was never connected


//another type of creating a promise
new Promise((resoleve,reject)=>{
    setTimeout(function(){
    //    console.log("Async task 2");
        resoleve()
    },1000)
}).then(()=>{
  //  console.log("async 2 resolved")
})

//third type of promise
promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       // console.log("promise three task 3")
        resolve({userNAme:"chi",email:"ahmed@ahmed.com"})//in this promise we will send data through the resolve function
        //the data will be received in the ".then"  part

    },1000)
})
promiseThree.then(function(user){//"user"  parametere gets the data being passed
    //how to take the data coming from resolve()
    //console.log("promise three resolved")
    //console.log(user)//the date sent by resole is easily received


})

//promise type/# four
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({userNAme:"chi",email:"ahmed@ahmed.com"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
const username = promiseFour.then((user)=>{
    console.log(user)
    return user.userNAme
}).then((userName)=>{
    console.log(userName)

}).catch((err)=>{
    console.log(err)//catch block to catch errors
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
});

//promise type 5
//promises can also be handled using async await
//some people prefer .then,catch some prefer async await
const promiseFive = new promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username:"JavaScript",password:"ahmed123"})
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
});
//issue with asyn await is that it does not catch errors as gracefully
//async await cannot directly handle errors
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.assertlog(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()
*/
//the work that will be done in next class
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     //fetch only needs a URL
//     const data =await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log("E",error)  
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))

//also called thenable