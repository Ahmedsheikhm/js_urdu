//selecting thebuttons
const buttons = document.querySelectorAll('.button')
//finding the body
const body = document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button);
  //alot of events availble
  //hovering of the mouse over the button,
  //if button clicked
  //and this is happening for all the buttons in the node array
  button.addEventListener('click',function(e){
   // console.log(e)
   // console.log(e.target)
   // if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;//either like this
   // }
   //or use if else on each color and 
   //then change the value
    
  })
})