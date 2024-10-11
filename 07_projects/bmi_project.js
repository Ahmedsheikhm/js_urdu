//we have gotten the whole form and saved it within const form
const form = document.querySelector('form')
//form gets submitted in get or post type  but value goes to teh server
//we will stop that right now
form.addEventListener('submit',function(e){
  e.preventDefault()//stopping value to go directly to a server
  const height = parseInt(document.querySelector('#height').value)//we gat input value this way, but the value we gat is in string thus it is turned into a number
  const weight = parseInt(document.querySelector('#weight').value)//if we  put this code out of the form.eventlistner code block we will store empty value within hieght and weight
  const result =  document.querySelector('#results')

  if(height==='' || height <0|| isNaN(height)){
    results.innerHTML='Please give a valid height';

  }else if(weight==='' || weight <0|| isNaN(weight)){
    results.innerHTML='Please give a valid weight';

  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //now show result
    result.innerHTML=`<span>${bmi}</span>`
  }


  //putting some checks as a precaution



})