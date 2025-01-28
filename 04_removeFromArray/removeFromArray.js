const removeFromArray = function(myArray, toBeRemoved) {
    for (arg in arguments) {
        if (arg === 0 || myArray.indexOf(arguments[arg]) === -1){
            continue;
        } while (myArray.indexOf(arguments[arg]) !== -1) {
            myArray.splice(myArray.indexOf(arguments[arg]), 1);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
