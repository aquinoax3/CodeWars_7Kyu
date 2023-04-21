
// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.







function sumNoDuplicates(numList) {
    return (numList.filter(el => numList.indexOf(el) === numList.lastIndexOf(el)).reduce((acc, curr) => acc + curr, 0))
}