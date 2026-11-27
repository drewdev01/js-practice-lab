// Print sum of first n terms of Fibonacci series. 

let n=10

let a=0
let b=1
let sum=0

for(let i=0;i<n;i++){
  sum+=a
  let c=a+b
  a=b
  b=c
}

console.log(sum)
