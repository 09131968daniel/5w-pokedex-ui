const typeSelect = document.getElementById("typeSelect");

const typeGroup = document.getElementById("typeGroup");

async function searchByType(event) {
    typeGroup.innerHTML = "";
    event.preventDefault();
    const type = event.target.value;
    if (type != "select pokemon type") {
        let response = await fetch("https://pokeapi.co/api/v2/type/" + type);
        let type_json = await response.json();
        for (let pokemon of type_json.pokemon) {
            const listItem = document.createElement("li");
            listItem.innerText = pokemon.pokemon.name;
            listItem.setAttribute("class", "list-group-item");
            typeGroup.append(listItem);
        }
    }
}

function listTypes() {
    const types = ["Select Pokemon Type", "Normal", "Flying", "Fighting", "Fire", "Water",
        "Electric", "Grass", "Bug", "Poison", "Dark", "Psychic", "Ghost",
        "Ground", "Rock", "Steel", "Ice", "Dragon", "Fairy"];

    for (let type of types) {
        const option = document.createElement("option");
        option.innerText = type;
        option.value = type.toLowerCase();
        typeSelect.append(option);
    }
}

listTypes();

typeSelect.addEventListener("change", (e) => { searchByType(e) });