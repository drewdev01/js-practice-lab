//Print Fibonacci series up to n terms.
let n=10
  let a=0
  let b=1
for(let i=0;i<n;i++){
  let c=a+b
  console.log(a)
  a=b
  b=c
}