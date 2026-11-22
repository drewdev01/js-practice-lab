//Take a password string and check basic rules (length ≥ 8 and contains at least one digit). 

let pass='titani99'

if(pass.length>=8&&/\d/.test(pass)) console.log('valid')
  else console.log('invalid')