
const products = [
    {id: 1, name: "smart-phone", price:10000},
    {id: 2, name: "smart phone", price:21845},
    {id: 3, name: "Huwaei Y prime", price:19000},
    {id: 4, name: "I phone 14max", price:120000},
    {id: 5, name: "appple xo", price:10000},
    {id: 6, name: "Nokia Phone", price:100},
    {id: 7, name: "Motorolla", price:1000},
    {id: 8, name: "Green war", price:30000},
    {id: 9, name: "HTC", price:20000},
]

function matchedItem(products, search){
    let matched = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedItem(products, "phone");
console.log(result);
console.log(5/0);
console.log("123" + 123);
console.log("123"- "120");
console.log("123" + 120);
console.log(6/ "3");

let a= "”hi”";

let b= "”there”";

console.log(a+b);

