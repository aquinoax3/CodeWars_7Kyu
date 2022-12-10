// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]


function fizzbuzz(n){
 
  const array =[]
  const result = []
  
  for(let i = 0; i <= n; i++){
    array.push(i)
  }
  
  for ( let i = 1; i < array.length; i++) {
    let num = array[i]
    
    if( num % 3 === 0 && num % 5 === 0) {
     num = "FizzBuzz"
     result.push(num)
   } 
   else if ( num % 5 === 0) {
     num = "Buzz"
     result.push(num)
   } else if (num % 3 === 0) {
     num = "Fizz"
     result.push(num)
   } 
   else {
     result.push(num)
   }
      
  }
  
  console.log(result)
 
 return result
}
