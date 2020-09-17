const getInput = document.getElementById("name-id-input");

const button = document.getElementById("search-btn");

const picture = document.getElementById("picture");

const id = document.getElementById("id-container");

const height = document.getElementById("height-container");

const weight = document.getElementById("weight-container");

const type = document.getElementById("type-container");

const pokemon_name = document.getElementById("name-container");


button.addEventListener("click", handleClick);


function handleClick(event) {
    event.preventDefault();
    let searchValue = getInput.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + searchValue
    fetch(url)
        .then(response => response.json())
        .then(data => assignJson(data));
}

function assignJson(data) {

    if (data.sprites.other["official-artwork"].front_default) {
        picture.setAttribute("src", data.sprites.other["official-artwork"].front_default);
    } else {
        picture.setAttribute("src".data.sprites.front_default);
    }
    pokemon_name.innerText = data.name;
    id.innerText = "Id: " + data.id;
    height.innerText = "Height: " + data.height;
    weight.innerText = "Weight: " + data.weight;
    type.innerText = "Type: " + data.types[0].type.name;
}