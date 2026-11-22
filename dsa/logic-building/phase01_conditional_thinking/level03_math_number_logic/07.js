//Check if an amount can be evenly divided into 2000, 500, and 100 currency notes. 

let num=5000

if(num%100===0)console.log('it can be evenly divided')
  else console.log('it cant be')

//another way to check number of all notes

// let amount = 7600;
// let notes2000 = amount / 2000;
// amount %= 2000;
// let notes500 = amount / 500;
// amount %= 500;
// let notes100 = amount / 100;
// amount %= 100;
// if (amount == 0) System.out.println("2000: " + notes2000 + ", 500: " + notes500 + ", 100: " + notes100);
// else System.out.println("Amount cannot be fully divided into these notes");