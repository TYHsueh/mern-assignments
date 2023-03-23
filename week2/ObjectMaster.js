const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//names that start with the letter "B"
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);

//return an array of just the ids
const pkmnIds = pokémon.map(value=> value.id);
console.log(pkmnIds);

//id is evenly divided by 3
const pkmnIdBy3 = pokémon.filter(p => p.id%3 === 0);
console.log(pkmnIdBy3);

//fire type
//const pkmnFire = pokémon.filter(value => value.types);
//console.log(pkmnFire);

//more than one type
const pkmnMoreType = pokémon.filter(value => value.types.length>1);
console.log(pkmnMoreType);

//array of pokemon names
const pkmnName = pokémon.map(value => value.name);
console.log(pkmnName);

//array of names of pokemon's id greater than 99
//const pkmnIdAbove99 = pokémon.filter(value => value.id > 99);
const pkmnNameAbove99 = pokémon.filter(value => value.id > 99).map(value =>value.name);
console.log(pkmnNameAbove99);

//only poison
const pkmnOnlyPoison = pokémon.filter(value =>value.types.length===1).filter(value =>value.types[0]==="poison").map(value => value.name);
console.log(pkmnOnlyPoison);

// first type with sec type of flying
const pkmnSecondFlying = pokémon.filter(value =>value.types[1] === "flying").map(value => value.types[0]);
console.log(pkmnSecondFlying);

//count of normal type 
//const pkmnNormal = pokémon.filter(value =>value.types === "");
//consle.log(pkmnNormal.length);