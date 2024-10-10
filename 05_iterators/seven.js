//map//map i think allows for code to be run  in the call back function and return the arrsy
//filter on the other hand i believe allows for conditional statement to be run and retun array
const myNumbers=[1,2,3,4,5,6,7,8,9,10] 

//const newNums = myNumbers.map((num)=>num+10)
//console.log(newNums)
//now chaining
//we can do as much chaining as we like
const newNums  = myNumbers
                .map((num)=>num*10)
                .map((num)=> num+1)
console.log(newNums)

const newNumb  = myNumbers
                .map((num)=>num*10)//over here everything gets returned after array is manipulated
                .map((num)=> num+1)
                .filter((num)=>num>=40)//filter has true false wala issue
console.log(newNumb)