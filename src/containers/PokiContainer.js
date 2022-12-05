import React, { useState, useEffect } from 'react';
import PokiSelector from '../components/PokiSelector';
import PokiInfo from '../components/PokiInfo';

const PokiContainer = () => {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null); 
    
    useEffect(() => {
        getPokemon();
      }, [])
  
      const getPokemon = function(){
          fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100%22')
          .then(res => res.json())
          .then(pokemon => setPokemon(pokemon.results))
      }

      const onPokemonSelected = function(pokemon){
        setSelectedPokemon(pokemon);
    }


    return (
        <div className="main-container">
              <PokiSelector pokemon={pokemon} onPokemonSelected={onPokemonSelected}/>
              {selectedPokemon ? <PokiInfo pokemon={selectedPokemon}/> : null}

        </div>
    )


}





export default PokiContainer;
