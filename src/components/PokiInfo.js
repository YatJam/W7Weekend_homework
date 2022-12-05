import React, { useState, useEffect } from 'react';
const PokiInfo = ({pokemon}) => {

    const [pokemun, setPokemun] = useState([]);

    useEffect(() => {
        getPokiInfo();
      }, [])

    const getPokiInfo = function(){
        fetch(pokemon.url)
        .then(res => res.json())
        .then(pokemun => setPokemun(pokemun))
    }

    return (
        <div>
           <h3>Your Pokemon is: {pokemun.name}</h3> 
            {/* <img src={pokemun.sprites.front_default} alt="pokemon image"/>  */}
            <ul>Poki height: {pokemun.height}</ul>
            <ul>Poki wight: {pokemun.weight}</ul>
            {/* <ul>Poki Abilities: {pokemun.abilities.ability.name}</ul> */}
            
            
            
    
        </div>
    )
}

export default PokiInfo;