//Take a year and print the corresponding century (e.g., “19th century”, “20th century”) 

let year=102

let cent=Math.ceil(year/100)

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