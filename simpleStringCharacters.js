// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!



function solve(s) {
 
  if(s === ""){
    return [0,0,0,0]
  }
  
  let upperCaseCounter = 0
  let lowerCaseCounter = 0
  let numbers = 0 
  let specialChar = 0
  const result = []
  
  
  for (let i = 0; i < s.length; i++) {
    const char= s[i]
   if (char >= "A" && char <= "Z") {
     upperCaseCounter++
   } else if (char >= "a" && char <= "z") {
     lowerCaseCounter++
   } else if (char >= "0" && char <= "9") {
     numbers++
   } else {
     specialChar++
   }
    
  }
  
  result.push(upperCaseCounter)
  result.push(lowerCaseCounter)
  result.push(numbers)
  result.push(specialChar)
  
  
  return result
  
}
