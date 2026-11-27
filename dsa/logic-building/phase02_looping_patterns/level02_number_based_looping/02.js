//Print the reverse of a given number. 

let n=123

let reverse=0
let a

while(n>0){
  a=n%10
  reverse=(reverse*10)+a
  n=Math.trunc(n/10)
}

console.log(reverse)