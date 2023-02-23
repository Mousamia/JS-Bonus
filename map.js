const numbers = [1,3,5,7,9];
const multiplied = [];
for(const number of numbers){
    const multiply = number*3;
    multiplied.push(multiply);
}

// arrow function
// const getMultiplied = number => number*3;

// for(const number of numbers){
//     const multiply = getMultiplied(number);
//     multiplied.push(multiply);
// }


const getDone = ["samia" , "lamia" , "samiha"].map(x => x + "chowdhury");
console.log(getDone);
const firstLetters = ["samia", "othoi", "nidhi", "kobita"].map(x => x[1]);
console.log(firstLetters);

const obj = {
    name: "samia",
}

obj.age = 29;

console.log(obj);

const quiz = [12,5,7];
console.log(Math.min(quiz));


const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2 == false);
console.log(output);




console.log(multiplied);
