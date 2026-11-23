//Check whether a given integer is single-digit, double-digit, or multi-digit. 

let int=-5
let num=Math.abs(int)
if(num>=0&&num<=9)console.log('its a single digit')
else if(num>9&&num<100)console.log('its a double digit')
  else console.log('its a multi digit number')


//another approach

// let int=-5
// let num=Math.abs(int)
// if(num<10)console.log('its a single digit')
// else if(num<100)console.log('its a double digit')
//   else console.log('its a multi digit number')