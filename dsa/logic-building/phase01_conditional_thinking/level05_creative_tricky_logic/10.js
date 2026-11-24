//Take a year and print the corresponding century (e.g., “19th century”, “20th century”) 

let year=102

let cent=Math.ceil(year/100)  //wont work well with other Math functions

console.log(cent+' century')

//alternative approach if we care about suffix

// let year = 102;

// let cent = Math.ceil(year / 100);
// let suffix = 'th';

// if (cent % 100 < 11 || cent % 100 > 13) {
//   if (cent % 10 === 1) suffix = 'st';
//   else if (cent % 10 === 2) suffix = 'nd';
//   else if (cent % 10 === 3) suffix = 'rd';
// }

// console.log(cent + suffix + ' century');

// Let’s test it with year = 102:
// 102 / 100 = 1.02

// Math.ceil(1.02) = 2 (2nd century)

// Why it works: The 2nd century covers years 101 through 200. 
// Any year from 101 to 200 divided by 100 will give a decimal between 1.01 and 2.00. 
// Math.ceil() rounds all of those up to 2.