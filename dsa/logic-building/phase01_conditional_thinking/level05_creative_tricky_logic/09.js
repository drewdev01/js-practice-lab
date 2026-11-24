//Take two dates (day and month) and determine which one comes first in the calendar.

let d1=2
let m1=3

let d2=3
let m2=3

if(m1===m2){
  if(d1<d2)console.log(m1+' '+d1+' comes first')
  else console.log(m2+' '+d2+' comes first')
}
else if(m1<m2)console.log(m1+' '+d1+' comes first')
else console.log(m2+' '+d2+' comes first')

//alternative solution
// Take two dates (day and month) and determine which one comes first in the calendar.
// let day1 = 12, month1 = 5;
// let day2 = 10, month2 = 6;
// if (month1 < month2 || (month1 == month2 && day1 < day2)) console.log("First date comes first");
// else if (month1 == month2 && day1 == day2) console.log("Both dates are same");
// else console.log("Second date comes first");