//Print the sum of all even numbers up to n.

let n=5
let sum=0

for(let i=0;i<=n;i++)
  if(i%2===0)sum+=i //dont use n as a silly mistake instead of i

console.log(sum)