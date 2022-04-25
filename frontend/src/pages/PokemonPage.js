import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import PokeImage from "../components/PokeImage";

const PokemonPage = () => {
  let params = useParams();
  let [pokemon, setPokemon] = useState(null);
  let navigate = useNavigate();
  let imgString = null;

  useEffect(() => {
    getPokemon();
  }, [params.id]);

  let getPokemon = async () => {
    if (params.id === "new") return;
    let response = await fetch(`/api/pokemon/${params.id}/`);
    let data = await response.json();
    setPokemon(data);
    console.log("Pokemon", data);
    imgString = "../assets/" + data.number + ".png";
    console.log("Image Name", imgString);
  };

  let handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="pokemon">
      <div className="pokemon-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <button>&#9782; Field Notes</button>
      </div>
      {imgString !== null ? <p>loading</p> : <PokeImage src={imgString} />}
      {pokemon?.name}
    </div>
  );
};

export default PokemonPage;
