// for of loop
//higher order functions

//array specific loops
//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5,6]

//for of loops
for(const num of arr){
    //console.log(num); 
}

const greeting ="helloWorld!"
for(const greet of greeting){
    console.log(`${greet}`)
}
//maps
//similar array and has itteration

//map is an object
//map has unnique values
//holds key value value pairs
//remembers orders
//can use keys and values
const map = new Map()
map.set("IN","India")
map.set("PK","Pakistan")
map.set("US","United States of America")
map.set("FR","France")
map.set("PK","Pakistan")//did not go back into the map
//as values need to be unique
//also remembers the order in which we entered into the map
//console.log(map);

for([key,value] of map){
    console.log(key,":-",value);
}
const myObject ={
    'gam1':'NFS',
    'game2':'COD',
    'game':'Wukong'
}
//for([key,value] of myObject){
  //  console.log(key,":-",value);
//}   will not work