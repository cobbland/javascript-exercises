const palindromes = function (string) {
    let stringSplit = string.toLowerCase().split('');
    const badChars = [" ", "!", "?", ".", ","]
    for (item in badChars) {
        for (char in stringSplit) {
            if (badChars[item] == stringSplit[char]) {
                stringSplit.splice(char,1);
            }
        }
    }
    let stringReversed = [...stringSplit].reverse().join('');
    stringSplit = stringSplit.join('');
    return stringSplit === stringReversed
};

// Do not edit below this line
module.exports = palindromes;
