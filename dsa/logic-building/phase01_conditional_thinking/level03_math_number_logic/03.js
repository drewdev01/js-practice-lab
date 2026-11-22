//Take a 4-digit number and check if the first and last digits are equal.

let num=1002

let first=Math.floor(num/1000)
let last=num%10

if(first===last)console.log('they are equal')
  else console.log('they are not equal')

