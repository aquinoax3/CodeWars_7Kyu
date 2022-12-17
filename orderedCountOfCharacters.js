// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]




onst orderedCount = function (text) {
  const count = {}
  const array = []
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    
    if (count[char] === undefined) {
      count[char] = [array.length, 1];
      array.push([char, 1]);
    } else {
      const charArrIdx = count[char][0];
      const charCount = ++count[char][1];

      array[charArrIdx] = [char, charCount];
    }   
  }
  
//   for ( let char in count) {
//     array.push([char, count[char]])
//   }
  
  console.log(count)
  console.log(array)
  
  return array
  
  
}
