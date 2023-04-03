// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

var mispelled = function (word1, word2) {

    if (word1 === word2) {

        return true;
    }

    if (Math.abs(word1.length - word2.length) > 1) {

        return false;
    }

    let diff = 0;

    for (let i = 0, j = 0; i < word1.length && j < word2.length; i++, j++) {
        if (word1[i] !== word2[j]) {

            diff++

            if (word1.length > word2.length) {
                j--
            } else if (word1.length < word2.length) {
                i--
            }
        }

        if (diff > 1) {
            return false;
        }
    }


    return true;
}