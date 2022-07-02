const removeFromArray = function(arr, ...args) {
    return arr.filter(element =>{
        for(let i=0;i<args.length;i++){
            return !args.includes(element);
        }
    });
};
// Do not edit below this line
module.exports = removeFromArray;
