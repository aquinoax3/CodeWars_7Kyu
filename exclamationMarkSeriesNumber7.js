// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove (string) {
  
  const array = string.split(" ")
  const newArr = []
  
  for(word of array) {
    let count = 0
    
    if(word.includes("!")) {
      for(letter of word) {
        if(letter === "!") {
          count++
        }
      }
      if(count !== 1) {
        newArr.push(word)
      }
    } else {
      newArr.push(word)
    }
  }
  
  return newArr.join(" ")
  
}
