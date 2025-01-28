const sumAll = function(numOne, numTwo) {
    if ((numOne < 0 || !Number.isInteger(numOne)) ||
        (numTwo < 0 || !Number.isInteger(numTwo))) {
            return "ERROR";
        }
    let highNum;
    let lowNum;
    if (numOne >= numTwo) {
        highNum = numOne;
        lowNum = numTwo;
    } else {
        highNum = numTwo;
        lowNum = numOne;
    }
    let finalNum = 0;
    let numCount = lowNum;
    while (numCount <= highNum) {
        finalNum += numCount;
        numCount++;
    }
    return finalNum;
};

// Do not edit below this line
module.exports = sumAll;
