const loadQuote = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}

 
function displayData(data){
    const quote = document.getElementById('quote');
    console.log(data);
    quote.innerHTML = data.quote;

    
}



