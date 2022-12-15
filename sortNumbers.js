// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


function solution(nums){
  
  if ( nums === null) {
    return []
  }
  
  for ( let i = 1; i < nums.length; i++) {
    let currNum = nums[i] // currNum = 5
    let j = i - 1 // j = 3
    
    while (j >= 0 && nums[j] > currNum) {
      nums[j + 1] = nums[j]
      j--
    }
    
    nums[j + 1] = currNum
  }
  
  return nums
}
