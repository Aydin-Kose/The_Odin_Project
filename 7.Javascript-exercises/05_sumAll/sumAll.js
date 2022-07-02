const sumAll = function (first, second) {
    let output = 0;
    if (first < 0 || second < 0 || typeof first !== 'number' || typeof second !== 'number') {
        return 'ERROR';
    }
    if (first > second) {
        let temp = first;
        first = second;
        second = temp;
    }
    for (let i = first; i < second + 1; i++) {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
