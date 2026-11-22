//Take an integer (1–9999) and check if the sum of its digits is greater than the product of its digits.

let n=1
let isValid=false

let ones
let tens
let hundreds
let thousandths

if(n>0&&n<10){
isValid=false
}
else if(n<100){
  ones=n%10
  tens=Math.trunc(n/10)
  if(ones+tens>ones*tens)isValid=true
}
else if(n<1000){
  ones=n%10
  tens=Math.trunc(n/10)%10
  hundreds=Math.trunc(n/100)
  if(ones+tens+hundreds>ones*tens*hundreds)isValid=true
}
else if(n<10000){
  ones=n%10
  tens=Math.trunc(n/10)%10
  hundreds=Math.trunc(n/100)%10
  thousandths=Math.trunc(n/1000)
  if(ones+tens+hundreds+thousandths>ones*tens*hundreds*thousandths)isValid=true
}

if(isValid)console.log('yes it is')
  else console.log('it is not')

// Alternative solution
// let n = 18;

// if (n < 1 || n > 9999) {
//   console.log('Number must be between 1 and 9999');
// } else {
//   let isValid = false;

//   if (n < 10) {
//     // Single-digit: sum and product are always equal
//     isValid = false;
//   } else if (n < 100) {
//     let ones = n % 10;
//     let tens = Math.trunc(n / 10);

//     if (ones + tens > ones * tens) {
//       isValid = true;
//     }
//   } else if (n < 1000) {
//     let ones = n % 10;
//     let tens = Math.trunc(n / 10) % 10;
//     let hundreds = Math.trunc(n / 100);

//     if (ones + tens + hundreds > ones * tens * hundreds) {
//       isValid = true;
//     }
//   } else {
//     let ones = n % 10;
//     let tens = Math.trunc(n / 10) % 10;
//     let hundreds = Math.trunc(n / 100) % 10;
//     let thousands = Math.trunc(n / 1000);

//     if (ones + tens + hundreds + thousands > ones * tens * hundreds * thousands) {
//       isValid = true;
//     }
//   }

//   if (isValid) {
//     console.log('yes it is');
//   } else {
//     console.log('it is not');
//   }
// }


