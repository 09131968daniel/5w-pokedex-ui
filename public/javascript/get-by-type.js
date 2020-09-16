const typeSelect = document.getElementById("typeSelect");

async function searchByType(type) {
    let type_json = await fetch("https://pokeapi.co/api/v2/type/" + type).json();
    return type_json.pokemon;
}

function listTypes() {
    const types = ["Normal", "Flying", "Fighting", "Fire", "Water",
        "Electric", "Grass", "Bug", "Poison", "Dark", "Psychic", "Ghost",
        "Ground", "Rock", "Steel", "Ice", "Dragon", "Fairy"];

    for (let type of types) {
        const option = document.createElement("option");
        option.innerText = type;
        typeSelect.append(option);
    }
}

listTypes();