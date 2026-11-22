//Take a number and print “Fizz” if divisible by 3, “Buzz” if divisible by 5, and 
//“FizzBuzz” if divisible by both.

let num=30

if(num%3===0&&num%5===0)console.log('FizzBuzz')
else if(num%5===0)console.log('Buzz')
else if(num%3===0)console.log('Fizz')
