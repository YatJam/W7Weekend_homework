import React from 'react';
import PokiItem from './PokiItem';

const PokiList = ({pokemon, onPokemonClicked}) => {

    const pokiItems = pokemon.map((pokemon, index) => {
      return <PokiItem pokemon={pokemon} key={index} index={index} onPokemonClicked={onPokemonClicked}/>
    })

  return (
    <div>
    <ul>
      {pokiItems}
    </ul>
  </div>
  )
}

export default PokiList;