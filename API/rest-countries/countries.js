const onLoad = () =>{
	fetch('https://restcountries.com/v2/all')
  	.then(res => res.json())
  	.then(data => displayCountries(data))
}

const displayCountries = (countries) => {
	// console.log(countries);
	// for(let country of countries){
	// 	console.log(country);
	// }
	const allCountries = document.getElementById('all-countries');
	console.log(allCountries);
	countries.forEach( country =>{
	const countryDiv = document.createElement('div');
	countryDiv.classList.add('country');
	countryDiv.innerHTML = 	`
	<h3> Name: ${country.name} </h3>
	<h3> City: ${country.capital? country.capital: "No Capital"}</h3>
	<button onclick ="displayCountryDetail('${country.cca2}')"> Details </button>
	`
	// const button = document.getElementsByTagName('button');
	// button.classList.add('btn');

	allCountries.appendChild(countryDiv);
	})

	
}

const displayCountryDetail = code => {
	const url = `https://restcountries.com/v3.1/alpha/${code}	`
	console.log(url);
	fetch(url)	
	.then(res => res.json())
	.then(data => console.log(data));
}


onLoad();
console.log()