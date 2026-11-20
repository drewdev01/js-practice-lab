// Take three numbers and print the largest.

let num1=27
let num2=50
let num3=44

let largest=num1

if(num2>num1&&num2>num3) largest=num2
else if(num3>num1&&num3>num2) largest=num3
else largest=num1

console.log(largest)