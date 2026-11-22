// Take the hour of the day (0–23) and print “Good Morning”, “Good Afternoon”, “Good Evening”, or “Good Night”. 

let hour=0

if(hour>=12&&hour<17)console.log('Good afternoon')
else if(hour>=17&&hour<21)console.log('Good evening')
else if(hour<5||hour>=21)console.log('Good night')
else console.log('Good morning')

//better approach

// let hour = 16;
// if (hour >= 5 && hour < 12) System.out.println("Good Morning");
// else if (hour >= 12 && hour < 17) System.out.println("Good Afternoon");
// else if (hour >= 17 && hour < 21) System.out.println("Good Evening");
// else System.out.println("Good Night");


// alao another optional approach below but above is easier to read and order wont matter

// if (hour < 0 || hour >= 24) {
//   console.log("Invalid hour");
// } else if (hour < 5) {
//   console.log("Good Night");
// } else if (hour < 12) {
//   console.log("Good Morning");
// } else if (hour < 17) {
//   console.log("Good Afternoon");
// } else if (hour < 21) {
//   console.log("Good Evening");
// } else {
//   console.log("Good Night");
// }