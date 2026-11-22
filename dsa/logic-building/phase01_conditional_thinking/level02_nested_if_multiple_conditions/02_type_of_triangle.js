//If the sides form a valid triangle, determine whether it is equilateral, isosceles, or scalene. 

let s1=2
let s2=5
let s3=6

if(s1===s2&&s2===s3)console.log('equilaterial triangle')
  else if(s1===s2||s1===s3||s3===s2)console.log("its an isosceles triangle")
else console.log('its a scalene triangle')

//can check if a triangle is vallid first before doing this