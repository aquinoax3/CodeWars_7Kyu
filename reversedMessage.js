// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

function reverseMessage(str) {
    const lowerCase = str.toLowerCase().split(" ").reverse()

    const result = []

    for (let i = 0; i < lowerCase.length; i++) {
        let rev = ""

        for (let j = lowerCase[i].length - 1; j >= 0; j--) {
            if (j === lowerCase[i].length - 1) {
                rev += lowerCase[i][j].toUpperCase()
            } else {
                rev += lowerCase[i][j]
            }

        }

        result.push(rev)
    }

    return result.join(" ")
}