// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"




// cleaner option
function evenOrOdd(str) {
    let odd = 0
    let even = 0

    str.split("").map(num => num % 2 === 0 ? even += Number(num) : odd += Number(num))

    return odd === even ? 'Even and Odd are the same' : odd > even ? 'Odd is greater than Even' : 'Even is greater than Odd'
}



// first attempt
function evenOrOdd(str) {
    let odd = 0
    let even = 0

    for (num of str) {
        num % 2 === 0 ? even += Number(num) : odd += Number(num)
    }


    if (odd === even) return 'Even and Odd are the same'

    return odd > even ? 'Odd is greater than Even' : 'Even is greater than Odd'
}