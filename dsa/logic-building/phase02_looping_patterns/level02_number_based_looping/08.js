//Check if a number is prime or not. 

let n=7
let isPrime=true

for(let i=2;i<=n/2;i++){
if(n%i===0){
  isPrime=false       //can put condition for numbers less than 2 for edge cases
  break
}
}

if(isPrime)console.log('yes it is')
  else console.log('its not')
