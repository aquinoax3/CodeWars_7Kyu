// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false


function twoArePositive(a, b, c) {
    let positive = 0
    let negative = 0
    const array = [a, b, c]

    array.map(num => {
        if (num > 0) positive++

        if (num < 0) negative++
    })


    return positive == 2 && negative >= 0
}