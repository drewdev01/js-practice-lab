// Take a character and check whether it’s uppercase, lowercase, a digit, or a special character. 

let char='A'

if(char.charCodeAt()>=48&&char.charCodeAt()<=57) console.log("its a digit")
  else if(char.charCodeAt()>=65&&char.charCodeAt()<=90) console.log("its an uppercase")
    else if(char.charCodeAt()>=97&&char.charCodeAt()<=122) console.log("its a lowercase")
  else console.log('its a special character')