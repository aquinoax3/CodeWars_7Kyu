// our task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

function removeConsecutiveDuplicates(string) {
    const array = string.split(" ")
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            newArray.push(array[i])
        }
    }

    return newArray.join(" ")
}