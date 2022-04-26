import { Link } from "react-router-dom";

const SearchListItem = ({ name, id }) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="notes-list-item">
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default SearchListItem;
