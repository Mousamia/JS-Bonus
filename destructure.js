const nidhi = {
    name: "azmery",
    surname: "sultana",
    age: 27,
    number: 034234,
    profession: "teacher",
    work: function(){
        console.log("analyze");
        console.log("teach");
        // return 0;
    }

}

// let age = nidhi.age;
// its called destructuring
let {age} = nidhi;

// console.log(nidhi.name);
// console.log(nidhi.work());
console.log(age);
// console.log(boyos);

const nayoks = ["bappi", "sappi", "murga"];
const [king, lost, tour] =nayoks;
console.log(lost);

function getDates (){
    return ['23', 34];
}

console.log(getDates());
// destructuring

const [first, second ] = getDates();

console.log(first);
console.log(second);

if(true){
    let x= 5;
     x =10;
     console.log(x);
}

