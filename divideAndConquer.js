// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.




function divCon(x){
  
  let numbers = 0
  let strNum = 0
  
  for(num of x) {
    
    if(typeof num === 'number') {
      numbers += num
    }
    
    if(typeof num === 'string') {
      const strToNum = Number(num)
      strNum += strToNum
    }
  }
  
  return numbers - strNum

}
