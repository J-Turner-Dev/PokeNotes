import { Link } from "react-router-dom";

let getTime = (pokemon) => {
  return new Date(pokemon.updated).toLocaleDateString();
};

const PokemonListItem = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="notes-list-item">
        <h3>{pokemon.name}</h3>
        <p>
          <span>{getTime(pokemon)}</span>
          {pokemon.classification}
        </p>
      </div>
    </Link>
  );
};

export default PokemonListItem;
