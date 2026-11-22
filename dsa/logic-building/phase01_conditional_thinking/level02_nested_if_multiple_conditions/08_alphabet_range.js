//Take an alphabet character and check if it lies between ‘a’ and ‘m’ or ‘n’ and ‘z’.

let char='b'

if(/^[a-z]$/i.test(char)){
  //edge case 
  // //const lower = char.toLowerCase()
if(char>='a'&&char<='m')console.log('charcacter lies between a and m')
  else console.log('charcacter lies between n and z')
}
else console.log('not a valid input')

//explanation for edge case

// Uppercase 'A'–'Z' have ASCII codes 65–90.

// Lowercase 'a'–'z' have ASCII codes 97–122.

// If char = 'Z' (code 90):

// /^[a-z]$/i.test('Z') evaluates to true.

// char >= 'a' && char <= 'm' checks 90 >= 97 && 90 <= 109, which is false.

// It falls into the else block and prints '
// charcacter lies between n and z'—which happens to be right by coincidence, 
// but if char = 'B' (code 66), it also fails 66 >= 97 and wrongly prints 'lies between n and z'.