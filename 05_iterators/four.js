//for in loop for object
const myObject ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myObject){
    console.log(`${key} shortcut for ${myObject[key]}`);
}
//for in loop for array
const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(key)
}
//arrays have keys according to their index
//objects can have keys assigned by yhe programmer
 
