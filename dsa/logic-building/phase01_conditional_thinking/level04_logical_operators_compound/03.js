//Take three numbers and print the median value (neither maximum nor minimum). 

let a=80
let b=75
let c=100
let median=a

if(b>a&&b<c) median=b 
else if(b>c&&b<a) median=b
else if(c>b&&c<a) median=c
else if(c>a&&c<b) median=c

console.log(median)

//edge cases
// use >= <=instead of > < for duplicates

//for more readability and avoid repeating
// if ((b >= a && b <= c) || (b >= c && b <= a)) {
//   median = b;
// } else if ((c >= b && c <= a) || (c >= a && c <= b)) {
//   median = c;
// }