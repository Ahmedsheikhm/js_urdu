//control or logic flow

if(2==="2"){//===(strict equal) triple equal to is used to aslo check the data type is the same aswell as the value
    //console.log("TRUE")
}else{
    //console.log("false")
}
//similarly for negative !== is also available for use

//if statement short hand
const balance =1000;
//if(balance>500) console.log("test")//although only one line and by using ,
/*
if(balance<500){
    console.log("les than 500")
}else if(balance<750){
    console.log("les than 750")
}else if(balance<900){
    console.log("les than 900")
}else{
    console.log(1200)
}*/

const userLoggedIn =true
const debitcard = true
const loggedInFromGoogle =false
const loggedInFromEmail=true

if(userLoggedIn && debitcard && 2===2){
    console.log("Allowed to purchase courses")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}