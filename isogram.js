// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



function isIsogram(str){
  
  const strLoweCase = str.toLowerCase()
 
  for (let i = 0; i < strLoweCase.length; i++) {
    for(let j = i + 1; j < strLoweCase.length; j++) {
      if (strLoweCase[i] === strLoweCase[j]) {
        return false
      }
    }
  }
  
  return true
}
