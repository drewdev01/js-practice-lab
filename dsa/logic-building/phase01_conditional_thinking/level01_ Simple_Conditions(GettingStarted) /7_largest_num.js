// Take three numbers and print the largest.
//brute force
// let num1=27
// let num2=50
// let num3=44

// let largest=num1   //could have defined largest as -Infinity and it would have still worked

// if(num2>num1&&num2>num3) largest=num2
// else if(num3>num1&&num3>num2) largest=num3
// else largest=num1

// console.log(largest)

//alternative and better approach

let first = 20, second = 35, third = 12;
let largest = first;
if (second > largest) largest = second;
if (third > largest) largest = third;
console.log("Largest = " + largest);

//no need to compare a variable with 2 other variables cos we are not using console.log after every condition
//even if second is not largest in first comaprison it will be corrected in next step as we are using if in every step

/*
 * Explanation:
 * The variables `first`, and `largest` hold the values that the logic checks, counts, or transforms.
 * The if/else checks test the important cases in order: `second > largest`, `third > largest`.
 * Only the branch whose condition becomes true prints its message.
 */