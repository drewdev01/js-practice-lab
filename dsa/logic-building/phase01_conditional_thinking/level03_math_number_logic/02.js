//Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither.

let num =107


let first=Math.floor(num/100)
let middle=Math.floor(num/10)%10
let last=num%10

if(middle>first&&middle>last)console.log('middle is largest')
else if(middle<first&&middle<last)console.log('middle is smallest')
  else console.log('middle is neither')

//another approach I thought of (it was wrong)

// let num = 155;

// let a = Math.trunc(num / 100);
// let b = Math.trunc(num / 10) % 10;
// let c = num % 10;

// let largest = a;
// let smallest = b;

// // Check who is largest
// if (b > a && b > c) {
//   largest = b;
// }
// if (c > a && c > b) {
//   largest = c;
// }

// // Check who is smallest
// if (a < b && a < c) {
//   smallest = a;
// }
// if (c < a && c < b) {
//   smallest = c;
// }

// // Final check on b (middle)
// if (b === largest) {
//   console.log("middle is largest");
// } else if (b === smallest) {
//   console.log("middle is smallest");
// } else {
//   console.log("middle is neither");
// }

//My approach fails due to below cases

// For 551 (a=5, b=5, c=1): largest started at 5, stayed 5, 
// and b === largest evaluated to true (middle is largest).

// For 155 (a=1, b=5, c=5): largest started at 1, 
// never updated because 5 > 5 was false, 
// so largest stayed 1 (the smallest digit!), and b === largest evaluated to false (middle is neither).

//corrected version of my approach

//sequential champion pattern

// let num = 155;

// let a = Math.trunc(num / 100);
// let b = Math.trunc(num / 10) % 10;
// let c = num % 10;

// // Assume 'a' holds both titles initially
// let largest = a;
// let smallest = a;

// // Update against 'b'
// if (b > largest) largest = b;
// if (b < smallest) smallest = b;

// // Update against 'c'
// if (c > largest) largest = c;
// if (c < smallest) smallest = c;

// // Final check on b (middle)
// if (b === largest && b === smallest) {
//   console.log("all digits are equal (middle is neither)");
// } else if (b === largest) {
//   console.log("middle is largest");
// } else if (b === smallest) {
//   console.log("middle is smallest");
// } else {
//   console.log("middle is neither");
// }