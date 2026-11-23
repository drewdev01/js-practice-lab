// Check whether a number is a perfect square (without using the square root function). 

let num=400

let root=Math.round(num**0.5)

if(root*root===num)console.log(num+' is a perfect square')
  else console.log('its not')

//can be done using loops too

//edge case, check for all negative numbers beforehand as they cant be perfect squares
// can just add simple if


//just for practice with added if below

// let num=1000
// let root=Math.round(num**0.5)
// if(num<0)console.log('negative numbers cant be perfect squares')
//   else{
// if(root*root===num)console.log('its a perfect square')
//   else console.log('its not')
//   }