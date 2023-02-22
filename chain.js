const users = [ {id:001, name: "abul", age:27}];
// console.log(users[0].name);
const data = {
    count: 5000,
    data: [
        {id:1, name: "mokbul", job: "teacher"},
        {id:2, name: "sokbul", job: "catcher"},

    ]
}

// console.log(data.data[0].id);
// console.log(data.data[1].name);

const lightMan = {
    id: 5501,
    name: "Thomas Alva Edison",
    address: {
        street: {
            first: '23/21 Kochukhet Lane',
            Second: "3rd floor",
            Side: 'right side',
            guide: 'o'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

console.log(lightMan.name);
console.log(lightMan.address.street.Side);
console.log(lightMan.address.stret?.side);


