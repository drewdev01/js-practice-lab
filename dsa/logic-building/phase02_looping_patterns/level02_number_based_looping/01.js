//Count the number of digits in a given number.

let n=10

let count=0

while(n>0){
  count+=1
  n=Math.trunc(n/10)
}

console.log(count)