var myNestedArray = [["Toblerone", 5], ["Milka", 3]];

function myNestedFunction(arr) {
    myNestedArray = [...arr]
    return arr;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;