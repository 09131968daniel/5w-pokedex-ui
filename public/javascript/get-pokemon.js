const getInput = document.getElementById("name-id-input");

const button = document.getElementById("search-btn");

button.addEventListener("click",handleClick);

function handleClick(event) {
    event.preventDefault();
    let searchValue = getInput.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + searchValue
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

console.log(getInput.nodeValue);