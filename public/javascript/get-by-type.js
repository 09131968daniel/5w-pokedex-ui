async function searchByType(type) {
    let type_json = await fetch("https://pokeapi.co/api/v2/type/" + type).json();
    return type_json.pokemon;
}