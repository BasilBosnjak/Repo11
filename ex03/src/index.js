var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    myNewPets.push("Bird", "Fish");
    var firstPet = myPetsArray;

    return myNewPets;
}

console.log(myArrayFunction());
module.exports = myArrayFunction;
// not done