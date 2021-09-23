function myMutation(arr){
    var status = true;
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    for(var i=0; i < arr[1].length; i++){
       if (!arr[0].includes(arr[1][i])) {
           return !status;
       }
       }
       return status;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "Line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;