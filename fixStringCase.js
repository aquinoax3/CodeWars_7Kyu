
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.




function solve(s) {
    let low = 0
    let up = 0
    let newS = ""

    for (char of s) {
        if (char === char.toLowerCase()) {
            low++
        } else {
            up++
        }
    }

    if (low === up) {
        newS = s.toLowerCase()
        return newS
    }

    if (low > up) {
        for (char of s) {
            if (char === char.toUpperCase()) {
                char = char.toLowerCase()
                newS += char
            } else {
                newS += char
            }
        }
        return newS
    }

    if (low < up) {
        for (char of s) {
            if (char === char.toLowerCase()) {
                char = char.toUpperCase()
                newS += char
            } else {
                newS += char
            }
        }
        return newS
    }

}