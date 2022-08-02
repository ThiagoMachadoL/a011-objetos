const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5 ,
   }   

// pokemonCopia.nome = "Squirtle";
// pokemonCopia.tipo = "Água";
pokemon1.ataques = [];
pokemon1.ataques.push(
    "nome: Investida",
    " dano: 40", 
    "tipo: Normal",
    " precisao: 100");

const pokemonCopia= {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água",
    ataques:[],
    };
pokemon1.ataques2 = [];
pokemon1.ataques2.push(
        "nome: Folha Navalha",
        "dano: 45",
        "tipo: Grama",
        "precisao: 100",
)
pokemonCopia.ataques.push(
    "nome: Jato de Água",
    "dano: 40",
    "tipo: Água",
    "precisao: 100",
)


console.log(pokemon1);
console.log(pokemonCopia);


