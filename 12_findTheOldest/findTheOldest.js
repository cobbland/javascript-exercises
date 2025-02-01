const findTheOldest = function(people) {
    for (person in people) {
        if (!Object.hasOwn(people[person], "yearOfDeath")) {
            people[person].yearOfDeath = new Date().getFullYear();
        }
    }
    people.sort((personA, personB) => {
        return (personA.yearOfDeath - personA.yearOfBirth)
            - (personB.yearOfDeath - personB.yearOfBirth);
    });
    return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
