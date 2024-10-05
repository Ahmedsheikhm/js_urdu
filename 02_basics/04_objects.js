//const tinderUser = new object()//singleton object
const tinderUser ={}//non singleton object
  
tinderUser.id="123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email: "ahmed@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sheikh",
            lastname:"Ahmed"

        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)
//console.log(regularUser.fullname?.userfullname.firstname)
//the "?" in above line used in API responses incase there is no full name etc

const obj1 = {1:"A",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2} gives issue// obj3 now containns object within object
//const obj3=Object.assign({},obj1,obj2);//best way to concat
const obj3 ={...obj1,...obj2}//90% this syntax is used,easy ,simple& latest
console.log(obj3);

//when values come from database
const users=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"

    },
    {
        id:3,
        email:"c@gmail.com"

    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));//to get an array of keys for an object, later we can loop through these if needed
console.log(Object.values(tinderUser));//same for values
console.log(Object.entries(tinderUser));//arrays within arrays,with keys and value pairs
 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

