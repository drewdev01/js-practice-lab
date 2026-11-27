//Check if a number is a perfect number.

//perfect number is a positive integer equal to sum of all of its divsors excluding the number itelf

let n=500
let sum=0

for(let i=1;i<n;i++){  //can write i<=n/2 as every divsor ends at max n/2 //can start from i=2
if(n%i===0)sum+=i
}

if(sum===n)console.log('yes it is')   //can add edge case for number less than 1 as it needs to be positive
  else console.log('its not ')