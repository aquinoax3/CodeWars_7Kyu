// hen provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
  
  let result = ""
  
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      result += char.toUpperCase()
    } else {
      result += char
    }
  }
  
  return result
}
