//Check if a number is a multiple of 7 or ends with 7.

let num=77

if(num%7===0)console.log('its a multiple of 7')
if(num%10===7)console.log('it ends with 7')

  //if (number % 7 == 0 || Math.abs(number) % 10 == 7) 
  //abs func is used if we want to check negative multiples of 7, -7 is not trated equal to 7
  //the above macthes the question or exactly