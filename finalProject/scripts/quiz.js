fetch("https://restcountries-v1.p.rapidapi.com/all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "ittcmgzIz1mshRfHT4GfOzDIgM4rp1bdJ59jsnI7kl8mVjgxCw"
	}
})
.then(response => response.json())
.then(data => {

	let countries = [];
	let quizDiv = document.getElementById('quiz');
	for(let i = 0; i < 10; i++)
	{
		let country = {};
		let same = Math.floor(Math.random() * 250);
		country ["name"] = data[same].name;
		country ["capital"] = data[same].capital;
		country ["false1"] = data[Math.floor(Math.random() * 250)].capital;
		country ["false2"] = data[Math.floor(Math.random() * 250)].capital;
		country ["false3"] = data[Math.floor(Math.random() * 250)].capital;

		quizDiv.innerHTML += `<div>
		<div><p>${i+1}) What is the capital of ${country.name}</p></div>
		<div><label><input type="radio" name="${i}" value="${country.capital}"></input>${country.capital}</label>`;

		if(country.false1 != "") {
			quizDiv.innerHTML += `<label><input type="radio" name="${i}" value="${country.false1}"></input>${country.false1}</label></div>`;
		}
		if(country.false2 !="") {
			quizDiv.innerHTML += `<div><label><input type="radio" name="${i}" value="${country.false2}"></input>${country.false2}</label>`;
		}
		if(country.false3 != "") {
			quizDiv.innerHTML += `<label><input type="radio" name="${i}" value="${country.false3}"></input>${country.false3}</label></div>`;
		}		
		quizDiv.innerHTML += `</div><br><br>`;

		countries.push(country);
	}
	localStorage.setItem('quiz', JSON.stringify(countries));
	quizDiv.innerHTML += `<br><div><button id="submit">Submit</button></div><br><br>`;

	console.log(countries);
})
.catch(err => {
	console.log(err);
});