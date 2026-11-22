//Take 24-hour time (hours and minutes) and print whether it is AM or PM.

let num=24

if(num>=0&&num<12)console.log('its AM')
else if(num>=12&&num<24)console.log('its PM')
else console.log('enter valid time')

//can add minutes with this
//minutes >= 0 && minutes < 60