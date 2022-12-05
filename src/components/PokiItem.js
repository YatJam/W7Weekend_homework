import React from 'react';

const PokiItem = ({pokemon, onPokemonClicked}) => {

  const handleClick = function() {
    console.log(`clicked on ${pokemon.name}`);
    onPokemonClicked(pokemon);
  }
  
  return <li onClick={handleClick}>{pokemon.name}
  
  </li>
}

export default PokiItem;