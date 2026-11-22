//Take a 3-digit number and check if all digits are distinct. 

let num=131

let first=Math.floor(num/100)
let second=Math.floor(num/10)%10
let third=num%10

if(first!==second&&second!==third&&first!==third)console.log('all digits are distinct')
else console.log('they are not')

//remember to do third comaprison as well 
// cos its not like checking for equality where two comaprisons would be enough