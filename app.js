let generatorButton = document.querySelector('#generate-btn');
let quote = document.querySelector('#quote');
generatorButton.onclick = () => getQuote();
console.log(quote);


function getQuote() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(result => result
    .json().then(data => showQuote(data.value)));
}

function showQuote(text) {
    quote.innerHTML = text;
    quote.style.visibility = "visible";
}