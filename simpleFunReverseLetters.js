// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string





function reverseLetter(str) {
  
  const noAlphaChar = str.replace(/[^a-z]/gi, '')
  let revStr = ""
  
  for (let i = noAlphaChar.length - 1 ; i >= 0; i--) {
    
    
    revStr += noAlphaChar[i]
    
  }
  
  console.log(noAlphaChar)
  
  
  return revStr
  
}
