//Take three numbers and check if they can form a Pythagorean triplet.

let a=13
let b=12
let c=5

let largest=a
let smallest=b
let mid=c

if(b>a&&b>c)largest=b
else if(c>a&&c>b)largest=c

if(a<b&&a<c)smallest=a
else if(c<a&&c<b)smallest=c

if(b>a&&a>c)mid=a
else if(c<a&&b>a)mid=a
if(a>b&&b>c)mid=b
else if(c<b&&a>b)mid=b     

if(smallest*smallest+mid*mid===largest*largest)console.log('yes they form')
  else console.log('no they dont')

//mid part is kinda tricky, helps if you know how to code median isntantly
//refer phase 1 level 4 ques 3



//simpler easier solution

// let a = 3, b = 4, c = 5;
// if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) console.log("Pythagorean triplet");
// else console.log("Not a Pythagorean triplet");
