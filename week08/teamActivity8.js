function fetchData(url) {
    let outputBlock = document.getElementById('output');
    outputBlock.innerHTML = "";
    let navigation = document.getElementById('nav');
    navigation.innerHTML = "";
    
    fetch(url)
    .then(response => response.json())
    .then(function(data) {
        // console.log(data.next);
        data.results.forEach(element => {
            // console.log(element);
            outputBlock.innerHTML += `
                <h3> ${element.name} </h3>
                <p>${element.model}</p>
                <p>${element.manufacturer}</p>
                <p>${element.cost_in_credits}</p>
            `;
        });
        if(data.previous)
        {
            
            // create next page button
            // const prevButton = document.createElement('li');
            navigation.innerHTML += `<button id="callApi" onclick="fetchData('${data.previous}')">Previous</button>`;
            return navigation;

            // create previous page button
        }
        if(data.next)
        {
            // const nextButton = document.createElement('li');
            navigation.innerHTML += `<button id="callApi" onclick="fetchData('${data.next}')">Next</button>`;
            return navigation;
        }
    });
}

// document.querySelector('#callApi').addEventListener('click', fetchData('https://swapi.dev/api/starships/'));
// document.querySelector('#nextPage').addEventListener('click', fetchData);