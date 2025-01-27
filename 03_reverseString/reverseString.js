const reverseString = function(oldString) {
    let newString = "";
    let stringLength = oldString.length - 1;
    while (stringLength >= 0) {
        newString += oldString[stringLength];
        stringLength--;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
