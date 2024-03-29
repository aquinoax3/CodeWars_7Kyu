// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

// You can assume, that the input string has always non-zero length.

// Examples
// "test"   returns "e"
// "teeter" returns "r"
// "trend"  returns "t" (all the characters are unique)
// "aabbcc" returns null (all the characters are repeated)




// Optimized Approach

function firstNonRepeated(s) {
    for (char of s) {
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            return char
        }
    }

    return null
}





//Using Hash map

function firstNonRepeated(s) {
    const hash = {}

    for (char of s) {
        if (!hash[char]) {
            hash[char] = 0
        }

        hash[char]++
    }

    for (key in hash) {
        if (hash[key] === 1) {
            return key
        }
    }

    return null
}