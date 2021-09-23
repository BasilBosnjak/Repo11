function mySplice(arr1, arr2, n) {
    var newArr1 = arr2.slice();
    var newArr2 = arr1.slice();
    newArr1.splice(n, 0, ...newArr2.reverse());
    return newArr1;
}

console.log(mySplice([1, 2, 3],[4, 5], 1));
console.log(mySplice([1, 2, 3],[4, 5], 2));
console.log(mySplice(["b", "c"],["a", "d"], 1));
console.log(mySplice(["Dell", "Phillips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;