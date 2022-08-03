const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5 ,
};   
const pokemonCopia= {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água",  
};
pokemon1.ataques = [];
pokemon1.ataques.push(
    {
    nome: 'Investida',
    dano: 40, 
    tipo: 'Normal',
    precisao: 100,
    }
);
pokemonCopia.ataques =[ 
    ...pokemon1.ataques
];
pokemon1.ataques.push(
    {
    nome: 'Folha Navalha',
    dano: 4,
    tipo: 'Grama',
    precisao: 100
    }
);
pokemonCopia.ataques.push(
    {
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100,
    }   
);
console.log(pokemon1);
console.log(pokemonCopia);


