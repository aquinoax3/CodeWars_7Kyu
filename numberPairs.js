// In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.

// Example:

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]



function getLargerNumbers(a, b) {
    const newArr = []

    let i = 0
    let j = 0

    while (i < a.length) {
        if (a[i] > b[j]) {
            newArr.push(a[i])
            i++
            j++
        } else {
            newArr.push(b[j])
            i++
            j++
        }
    }

    return newArr
}