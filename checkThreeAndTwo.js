// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"


function checkThreeAndTwo(array) {
    const hash = {}
    let counter = []

    for (char of array) {
        if (!hash[char]) {
            hash[char] = 0
        }

        hash[char]++
    }

    for (key in hash) {
        if (hash[key] === 3 || hash[key] === 2) {
            counter.push(hash[key])
        }
    }


    return counter.includes(3) && counter.includes(2)

}