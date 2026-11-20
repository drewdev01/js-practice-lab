//Check if a given year is a leap year. 

let num=2002

if(num%4!==0)console.log("Not a leap year")
  else if (num%100!==0) console.log("It's a leap year")
else if(num%400===0) console.log("it is a leap year")
  else console.log("it is not a leap year")
