//Print the product of digits of a given number. 

let n=98
let prod=1

while(n>0){
  prod*=n%10
  n=Math.trunc(n/10)
}

console.log(prod)