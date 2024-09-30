const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)//this causes an array within an array

//console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros)//concats values together in the array
console.log(allheros)

const all_newheros = [...marvel_heros,...dc_heros]//said to be more prefered
console.log(all_newheros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Array = another_array.flat(Infinity)
console.log(real_another_Array)
Array.isArray("Ahmed")
console.log(Array.from("Ahmed"))//converts to an Array
 
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));