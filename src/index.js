const pokemonNames = [
    'Pikachu',
    'Bulbasur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Squirtle',
    'Metapod',
    'Pidgeotto',
    'Raichu',
    'Nidorina',
    'Jigglypuff',
    'Dugtrio',
    'Machoke'
];

const randomPokemonName = () => {
    const pokemonName = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
    console.log(pokemonName);
};

module.exports = { randomPokemonName };
