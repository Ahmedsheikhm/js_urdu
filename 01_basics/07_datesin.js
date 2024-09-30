//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())

//typeof myDate
//Date is an object
let myCreateDate = new Date("2024-10-13")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = new Date()
console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000))

myTimeStamp.toLocaleString('default',{
    weekday:"long",
})