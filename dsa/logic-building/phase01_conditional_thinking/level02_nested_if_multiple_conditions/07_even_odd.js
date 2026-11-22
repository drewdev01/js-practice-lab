//Take two numbers and determine whether both are even, both are odd, or one is even and one is odd. 

let a1=7
let a2=17

if(a1%2===0&&a2%2===0)console.log('both are even')
  else if(a1%2===0&&a2%2!==0)console.log(a1+' is even and '+a2+' is odd')
else if(a1%2!==0&&a2%2===0)console.log(a2+' is even and '+a1+' is odd')
  else console.log('both are odd')