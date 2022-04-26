import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import PokeImage from "../components/PokeImage";

const PokemonPage = () => {
  let params = useParams();
  let [pokemon, setPokemon] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    getPokemon();
  }, [params.id]);

  let getPokemon = async () => {
    let response = await fetch(`/api/pokemon/${params.id}/`);
    let data = await response.json();
    setPokemon(data);
  };

  let handleSubmit = () => {
    navigate("/pokemon");
  };

  return (
    <div className="pokemon">
      <div className="pokemon-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <button>&#9782; Field Notes</button>
      </div>
      <PokeImage alt={pokemon?.name} imageSrc={pokemon?.image} />
      <h1>{pokemon?.name}</h1>
      <p>{pokemon?.classification}</p>
      <p>{pokemon?.poketype}</p>
      <p>{pokemon?.height}</p>
      <p>{pokemon?.weight}</p>
      <p>Hitpoints: {pokemon?.hitpoints}</p>
      <p>Attack: {pokemon?.attack}</p>
      <p>Defense: {pokemon?.defense}</p>
      <p>Special: {pokemon?.special}</p>
      <p>Speed: {pokemon?.speed}</p>
    </div>
  );
};

export default PokemonPage;
