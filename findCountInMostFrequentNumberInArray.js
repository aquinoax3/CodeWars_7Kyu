// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.



function mostFrequentItemCount(collection) {
  const count = {}
    let max = 0
  
  for (let num of collection) {
    
    if (!(num in count)) {
      count[num] = 0
    }
    
    count[num]++
  }
  
  
  for (let num in count) {
    
    if (count[num] > max) {
      max = count[num]
    }
  }
  
    return max
}
