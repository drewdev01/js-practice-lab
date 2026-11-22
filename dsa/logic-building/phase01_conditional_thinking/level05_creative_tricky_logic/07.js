//Take a 3-digit number and check if the sum of the first and last digit equals the middle digit.

let num =122

let first=Math.round(num/100)
let mid=Math.round(num/10)%10
let last=num%10

if(first+last===mid)console.log('equals')
  else console.log('not equals')