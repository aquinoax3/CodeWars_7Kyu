// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n

// Cell phone keypad's layout:
// 1 2 3\n 
// 4 5 6\n  
// 7 8 9\n  
//   0\n

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only

function computerToPhone(numbers){
  let result = ""
  
  for(let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    
    switch(num) {
        case "0":
          result += "0"
          break
        case "1":
          result += "7"
          break
        case "2":
          result += "8"
          break
        case "3":
          result += "9"
          break
        case "4":
          result += "4"
          break
        case "5":
          result += "5"
          break
        case "6":
          result += "6"
          break
        case "7":
          result += "1"
          break
        case "8":
          result += "2"
          break
        case "9":
          result += "3"
          break
    }
  }
  return result
}
