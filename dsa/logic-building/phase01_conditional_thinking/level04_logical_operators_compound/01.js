//Take a character and check if it is a letter, a digit, or neither. 

let ch='5'
let eqs=ch.toLowerCase()


if(ch>=0&&ch<=9)console.log('its a digit')
  else if(eqs>='a'&&eqs<='z')console.log('its a letter')
else console.log('its neither')


//alternative

// let ch = '9';
// if (/[A-Za-z]/.test(ch)) System.out.println("Letter");
// else if (/\d/.test(ch)) System.out.println("Digit");
// else System.out.println("Neither");