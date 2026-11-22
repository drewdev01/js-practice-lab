//Take day and month and check if it forms a valid calendar date (ignoring leap years). 

let day=13
let month=21

let a=false

if(month>0&&month<=12){
if(month===2&&day>0&&day<=28)a=true
else if((month===4||month===6||month===9||month===11)&&day>0&&day<=30)a=true
else if((month===1||month===3||month===5||month===7||month===8||month===10||month===12)&&day>0&&day<=31)a=true
}

if(a)console.log('its valid')
  else console.log('its invalid')