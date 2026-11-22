// Take a character and check whether it’s uppercase, lowercase, a digit, or a special character. 

//brute force or first approach
// let char='A'

// if(char.charCodeAt()>=48&&char.charCodeAt()<=57) console.log("its a digit")
//   else if(char.charCodeAt()>=65&&char.charCodeAt()<=90) console.log("its an uppercase")
//     else if(char.charCodeAt()>=97&&char.charCodeAt()<=122) console.log("its a lowercase")
//   else console.log('its a special character')

//char.charCodeAt() is repeated , can be put into a single variable


//Above solution uses magic numbers
//In programming, raw numbers like 65 or 90 without explanation are called magic numbers
// —they force the next developer to stop and look up an ASCII chart.


//better ideal solution

let ch='5'
  if(ch.length!=1)console.log('please enter a single character')
  else if(ch>='a'&&ch<='z')console.log('its a lowercase character')
  else  if(ch>='A'&&ch<='Z')console.log('its an uppercase character')
  else if(/\d/.test(ch))console.log('its a digit') // or else if (ch >= '0' && ch <= '9')
  else console.log("its a special character")

  //edge case
//   let ch = 5;
// let str = String(ch); // Converts 5 -> '5' (and leaves 'A' -> 'A' untouched)

