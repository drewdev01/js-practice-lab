//Check if a number is a palindrome. 

let num=1225
let n=num
let reverse=0

while(n>0){
  let a=(n%10)
  reverse=reverse*10+a
  n=Math.trunc(n/10)
}

if(num===reverse)console.log('yes it is palindrome')