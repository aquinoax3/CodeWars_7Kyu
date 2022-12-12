// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"



var isAnagram = function(test, original) {
  
  const count = {}
  
  const lowCaseTest = test.toLowerCase()
  const ogCaseTest = original.toLowerCase()
  
  for (let char of lowCaseTest) {
    
    if (!(char in count)) {
      count[char] = 0
    }
    count[char]++
  }
  
  for (let char of ogCaseTest) {
    if( count[char] === undefined) {
      return false
    } else {
      count[char] --
    }
  }
    
    for (let char in count) {
      if (count[char] !== 0) {
        return false
      }
    }
    
    
  return true

  
};
