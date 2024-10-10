//reduce
const myNums=[1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },3)
// console.log(myTotal)
//reduce with arraow function

//const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)
//console.log(myTotal)
///real world //shopping cart
const shoppingCart =[
    {itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999

    },
    {
        itemName:"web dev course",
        price:5999
    },
    {
        itemName:"mobile course",
        price:5999
    }
]
const myTotal = shoppingCart.reduce((curr,currval)=>curr+currval.price,0)
console.log(myTotal)