
function results(){
    var url_string = window.location;
    var url = new URL(url_string);
    let userInput = [];

    for(let i = 0; i < 10; i++)
    {
        let input = url.searchParams.get(i);
        userInput.push(input);
    }

    let quizKey = [];
    if(localStorage.getItem('quiz')){
        quizKey = JSON.parse(localStorage.getItem('quiz'));
    }
    
    let correct = 0;
    for(let i = 0; i < 10; i++) {
        if(userInput[i] == quizKey[i]["capital"]) {
            correct += 1;
        }
    }

    document.getElementById("results").innerHTML = "Your score: " + correct + "/10";

    console.log("userInput: " + userInput[0]);
    if(userInput[0] != null) {
        localStorage.setItem('userInput', JSON.stringify(userInput));
    }
    localStorage.setItem('results', JSON.stringify(correct));

    quizData();
}


function quizData() {
    let quizKey = [];
    quizKey = JSON.parse(localStorage.getItem('quiz'));

    let userInput = [];
    userInput = JSON.parse(localStorage.getItem('userInput'));

    let input = document.getElementById('data');
    console.log(quizKey);
    for(let i = 0; i < 10; i++) {
        input.innerHTML += 
        `<p>${i+1}) The capitatal of ${quizKey[i].name} is: ${quizKey[i].capital}.</p>`;
        if(userInput[i] == null){
            input.innerHTML += `<p>Your answer: -blank-</p><br><br>`;
        }
        else {
            input.innerHTML += `<p>Your answer: ${userInput[i]}</p><br><br>`;
        }
    }
}