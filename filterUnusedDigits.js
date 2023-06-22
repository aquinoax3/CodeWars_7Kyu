// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.



function unusedDigits() {
    const arr = String([...arguments])
    const newArr = []
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result = ''

    for (char of arr) {
        let i = 0

        while (i < char.length) {
            newArr.push(char)
            i++
        }
    }

    const sortedArr = newArr.filter(num => num !== ",").sort((a, b) => a - b)
    console.log(sortedArr)

    for (num of numbers) {
        if (!sortedArr.includes(String(num))) {
            result += num
        }
    }

    return result

}