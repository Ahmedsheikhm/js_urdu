 //arrays

 const myArr = [0,1,2,3,4,5]//similar elements array
 //resizable, can be mixed as well
 //copy operations create shallow copies
 //shallow : same refrence point

 const myHeroes  =["ahemds","mahad"]
 
 //Array methods
 myArr.push(6)
 myArr.pop()
 //myArr.unshift(9)//adds value to the first index
 //myArr.shift // pops value from the first index
 //console.log(myArr)
 //console.log(myArr.includes(9))//returns boolean value
 //console.log(myArr.indexOf(3))//returns index value

 const newArr = myArr.join()
 //console.log(myArr)//will show joining
 //aswell as conversion to a string

 //slice,splice
 console.log("A",myArr);
 const myn1 = myArr.slice(1,3)
 console.log(myn1);
 console.log("B",myArr);

 const myn2 = myArr.splice(1,3)
 console.log(myn2);

 //slice does not manipulate the original array
 //splice does manipulate the original array 