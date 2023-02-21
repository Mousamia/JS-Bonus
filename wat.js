Array(16).join("wat"+2);
console.log(Array(6).join("wat"+2));
console.log(Array(6).join("wat"-2));
console.log(Array(6).join("wat"*2));


function add(f, s=10){
    return f+s;
}
console.log(add(5));

function add (a){
    return a+a;
}

// arrow function doesnot allow double parameter
const added = num => num*5;

console.log(add(15));
console.log(added(8));

const nums = [2,6,2,90];
const papaya = [34,12,48,99];

console.log(papaya[0]);
console.log("samia");