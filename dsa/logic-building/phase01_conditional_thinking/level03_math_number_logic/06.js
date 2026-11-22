//Take coordinates (x, y) and determine which quadrant the point lies in. 

let x=1
let y=1

if(x>0&&y>0)console.log('its in quadrant 1')
else if(x<0&&y>0)console.log('its in quadrant 2')
else if(x<0&&y<0)console.log('its in quadrant 3')
else console.log('its in quadrant 4')

//edge case if point lies on axis line or origin
//else console.log("Point lies on an axis or origin");