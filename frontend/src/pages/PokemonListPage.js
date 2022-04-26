import { useState, useEffect } from "react";
import PokemonListItem from "../components/PokemonListItem";
import { FaRegDotCircle } from "react-icons/fa";

const PokemonListPage = () => {
  let [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  let getPokemon = async () => {
    let response = await fetch("/api/pokemon/");
    let data = await response.json();
    setPokemons(data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">
          <FaRegDotCircle /> Pokemon List
        </h2>
        <p className="notes-count">{pokemons.length}</p>
      </div>
      <div className="notes-list">
        {pokemons.map((pokemon, index) => (
          <PokemonListItem key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonListPage;
