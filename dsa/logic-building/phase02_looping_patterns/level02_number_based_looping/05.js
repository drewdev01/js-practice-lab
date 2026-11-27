//Check if a number is an Armstrong number. 

function isArmstrong(num){
  let n=Math.abs(num)
  let a=Math.abs(num)
  let count=0
  let sum=0
  while(n>0){
    count+=1
    n=Math.trunc(n/10)
  }
while(a>0){
  sum+=(a%10)**count
  a=Math.trunc(a/10)
}
if(num===sum) return true
}

isArmstrong(9474)?console.log('it is'):console.log('its not')