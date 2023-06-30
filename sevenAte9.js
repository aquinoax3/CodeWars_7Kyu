// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"


function sevenAte9(str) {
    let result = ""
    result += str[0]

    for (let i = 1; i < str.length - 1; i++) {
        result += (str[i] == 9 && str[i - 1] == 7 && str[i + 1] == 7) ? "" : str[i]
    }

    result += str[str.length - 1]

    return result === 'undefinedundefined' ? "" : result
}