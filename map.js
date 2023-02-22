const numbers = [1,3,5,7,9];
const multiplied = [];
for(const number of numbers){
    const multiply = number*3;
    multiplied.push(multiply);
}

// arrow function
// const getMultiplied = number => number*3;

for(const number of numbers){
    const multiply = getMultiplied(number);
    multiplied.push(multiply);
}


const getDone = ["samia" , "lamia" , "samiha"].map(x => x + "chowdhury");
console.log(getDone);







console.log(multiplied);
