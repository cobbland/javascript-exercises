const fibonacci = function(upTo) {
    upTo = parseInt(upTo);
    if (upTo === 0) return 0;
    if (upTo === 1) return 1;
    if (upTo < 0) return "OOPS";
    let lastCount = 0;
    let thisCount = 1;
    for (count = 1; count < upTo; count++) {
        countMem = thisCount;
        thisCount = lastCount + thisCount;
        lastCount = countMem;
    }
    return thisCount
};

// Do not edit below this line
module.exports = fibonacci;