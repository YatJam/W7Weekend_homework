import PokiList from "./PokiList";
const PokiSelector = ({pokemon, onPokemonSelected}) => {

    const handleSelection = function(event) {
        const pokemonSelected = pokemon [event.target.value];
        onPokemonSelected(pokemonSelected)
      }

      const pokemonOptions = pokemon.map((pokemon, index) => {
        return <option value={index} key={index}>{pokemon.name}</option>
      });

    return (
        <div>
           <select class="dropdown" defaultValue="" onChange={handleSelection}>
           <option value="" selected>Who's that Pokemon?</option>
           {pokemonOptions}
           </select>
        </div>
    
    )
}

export default PokiSelector;