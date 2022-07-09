const findTheOldest = function(arr) {
    return arr.sort((first,last) => (getDeathYear(first.yearOfDeath)-first.yearOfBirth) < (getDeathYear(last.yearOfDeath)-last.yearOfBirth)?1:-1)[0];
};

function getDeathYear(yearOfDeath) {
    console.log(yearOfDeath?yearOfDeath:new Date().getFullYear());
    return yearOfDeath?yearOfDeath:new Date().getFullYear();
}

// Do not edit below this line
module.exports = findTheOldest;
