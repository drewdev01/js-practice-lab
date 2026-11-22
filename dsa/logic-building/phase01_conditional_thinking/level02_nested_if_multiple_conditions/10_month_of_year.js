// Take a month number (1–12) and print the number of days in that month (ignore leap years).

let num=5

switch(num){
  case 1:console.log(31); break
  case 2:console.log(28); break
  case 3:console.log(31); break
  case 4:console.log(30); break
  case 5:console.log(31); break
  case 6:console.log(30); break
  case 7:console.log(31); break
  case 8:console.log(31); break
  case 9:console.log(30); break
  case 10:console.log(31); break
  case 11:console.log(30); break
  case 12:console.log(31); break
  default:console.log('invalid number')
}

//optimised solution with full potential of switch case

// let num = 5;

// switch (num) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;

//   case 2:
//     console.log(28);
//     break;

//   default:
//     console.log('Invalid number');
// }