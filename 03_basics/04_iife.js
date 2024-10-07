//imediately Invoked Function Expression(IIFE)

//one way to run code
function chai(){
    console.log(`DB CONNECTED`)
}
//chai()

//to emediatly run the code without any pollution 
//we use iife, very easy, wrap function in () and add bracket to the end to run the function
//due to pollution of global scope that causes problem

((name)=>{
    console.log(`${name} DB CONNECTED TWO`);
})('ahmed');
//we have to add ; in this special case

const ahmed=function(){
    console.log("hello")
}
ahmed()
function ahmed1(){
    console.log("ahemed")
}
ahmed1()