//Print all prime numbers between 1 and 100. 

for(let i=2;i<=100;i++){
  let isPrime = true
for(let n=2;n<=i/2;n++){
  if(i%n===0){isPrime=false
  break
} 

}
if(isPrime)console.log(i)
}