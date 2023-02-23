// function loadData(){
//     // we need to create a function if want to use fetch
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }

// function print(){
//     console.log("samia");
// }

function displayData(users){
    const ul = document.getElementById('users-container');
    

    for( const user of users){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);



    }

}

function bringUsers(){
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(response => response.json())
      .then(users => displayData(users))
      
}


