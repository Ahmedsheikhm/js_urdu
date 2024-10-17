//object literal
//object is the base unit
// const user={
//     username: "Ahmed",
//     loginCount:8,
//     sighnedIn:true,
//     getUserDetails:function(){
//         console.log(`Username:${username}`) does not give correct value due to scope issue in 
//         js engine
//     }
// }
// console.log(user.useranme)
// console.log(user.getUserDetails())
// const user2={
//     username: "Ahmed",
//     loginCount:8,
//     sighnedIn:true,
//     getUserDetails:function(){
//         console.log(`Username:${this.username}`)//this gets the current 
//         //context, it gets to know the values available in the local user2
//         //whereas not using the this key word will be accessing global varaibles and functions
//         console.log(this)
//     },
    
// }
// console.log(user2.useranme)
// console.log(user2.getUserDetails())
// console.log(this)//nothing in the global context at the moment
//doing context.log(this) in the browser console gives the window object which
//is the global object

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.isLoggedIn=isLoggedIn
    this.loginCount=loginCount
    //return this//will also work without returning "this"
    //return implicitely
    this.greeting=function(){
        console.log(`Welcome ${this.username}`)

    }
    
}
const userOne=new User("hitesh",12,true)
//const userTwo=User("chaiAurCode",11,false)//this will cause an overiting of the the values
//we will then use the "new" keyword
const userTwo= new User("chaiAurCode",11,false)
//console.log(userTwo  );
console.log(userOne.constructor)
//console.log(userTwo);