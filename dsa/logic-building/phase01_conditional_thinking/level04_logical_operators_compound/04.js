//Take 24-hour time (hours and minutes) and print whether it is AM or PM.

let num=24

if(num>=0&&num<12)console.log('its AM')
else if(num>=12&&num<24)console.log('its PM')
else console.log('enter valid time')

//can add minutes with this
//minutes >= 0 && minutes < 60

//alternative approach

// let num=7

// if(num<0||num>23)console.log('invalid time')
// else if(num<12)console.log('its AM')
// else console.log('its PM')

//if we want to add minutes as well

// let hours = 14;
// let minutes = 30;

// if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
//   console.log('invalid time');
// } else if (hours < 12) {
//   console.log('its AM');
// } else {
//   console.log('its PM');
// }
