// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'




function switcheroo(x){

  let array = x.split("")
  const result = []
  
  for (let i = 0; i < array.length; i++) {
     
    if (array[i] === "a") {
      result.push(array[i] = 'b')
    } else if (array[i] === 'b') {
      result.push(array[i] = 'a')
    } else {
      result.push(array[i])
    }
  }
  
  return result.join("")
}
