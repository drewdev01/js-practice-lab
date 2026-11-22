//Take a character and check if it’s a vowel or consonant. 
//brute force
// let char='a'

// if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u') console.log("it's a vowel")
//   else console.log("it's a consonant")

//better alternative to handle edge cases

// function isVowel (ch){
//   let upper=ch.toUpperCase()
//   return upper=='A'||upper=='E'||upper=='I'||upper=='O'||upper=='U'
// }

// let ch='ai'

// if(/^[a-z]$/i.test(ch)){
// if(isVowel(ch))console.log("its a vowel")
//   else console.log("its a consonant")
// }
// else console.log("its not an alphabetic character")

//clone of above emthod for practice

let ch='I'

function isVowel(ch){
  let lower=ch.toLowerCase()
  return lower=='a'||lower=='e'||lower=='i'||lower=='o'||lower=='u'
}

if(/^[a-z]$/i.test(ch)){
  if(isVowel(ch))console.log("its a vowel")
    else console.log("its a consonant")
}
else console.log("not a valid input")