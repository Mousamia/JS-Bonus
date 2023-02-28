const onLoad = () =>{
	fetch('https://restcountries.com/v2/all')
  	.then(res => res.json())
  	.then(data => displayCountries(data))
}

const displayCountries = countries => {
	countries.forEach(country => {
	const countryDiv = document.createElementmm('div');
	countries.classList.add('country');
	countryDiv.innerHTML = `
	
	<h3> Name: ${} </h3>	
`
})
}

onLoad();
document.write("samia");
