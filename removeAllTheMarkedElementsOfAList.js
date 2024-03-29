// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
// Enjoy it!!



// Optimized Approach 

Array.prototype.remove_ = function (integer_list, values_list) {
    const newArray = integer_list.filter(num => !values_list.includes(num))

    return newArray
}






//Brute Force Approach

Array.prototype.remove_ = function (integer_list, values_list) {
    const array = []
    const hash = {}


    for (num of values_list) {
        if (!hash[num]) {
            hash[num] = 0
        }
    }

    for (num of integer_list) {
        if (!(num in hash)) {
            array.push(num)
        }
    }

    return array

}


