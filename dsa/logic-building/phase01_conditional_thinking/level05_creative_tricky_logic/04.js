// Take time (hours and minutes) and print the smaller angle between the hour and 
//minute hands. 

let hours=2
let minute=30

let hang=(hours%12)*30+minute*0.5
let mang=minute*6

let diff
if(hang>mang)diff=(hang-mang)
else diff=(mang-hang)

if(diff>180)diff=360-diff

console.log(diff)

//alternative

// let angle = Math.abs(hourAngle - minuteAngle)
// if (angle > 180) angle = 360 - angle
// console.log("Smaller angle = " + angle)