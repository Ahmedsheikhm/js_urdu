const name = "ahmed"
const repoCount = 3
//console.log(name+repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//the above string uses string interpolation 
const name1 = new String('ahmed')//
//the abouve line gives ahmed as an object with key value pairs
//and the line below shows us how we can access the value using the key
console.log(name1[2]);
 // one of the available methods
 console.log(name1.length);
 console.log(name1.toUpperCase());//converts to uppercase
 console.log(name1.toUpperCase().charAt('0'))
 //substring strings
 const newString = name.substring(0,4);
 console.log(newString);

 //.slice module also takes -ve values
 // it gets reversed
 const newString2 = name.slice(0,4);

 //trim
 //removes extra spaces(white spaces) 
 const newString1  ="     Ahmed   "
 console.log(newString1.trim())

 //replace()
 const url ="htt_ps://hitesh.com_/hitesh%20choudhary"

 console.log(url.replace('%20','-  '))
 //find if is within string
 console.log(url.includes('hitesh'))

 //splitting a string
 console.log(url.split('_'));
 //trim removes empty spaces
 //replace replaces parts form the strings
 //includes checks if something exists in the string
 