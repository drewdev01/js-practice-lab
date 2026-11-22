//Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither.

let num =107


let first=Math.floor(num/100)
let middle=Math.floor(num/10)%10
let last=num%10

if(middle>first&&middle>last)console.log('middle is largest')
else if(middle<first&&middle<last)console.log('middle is smallest')
  else console.log('middle is neither')

