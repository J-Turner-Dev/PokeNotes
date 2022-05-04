import { useState, useEffect } from "react";
import SearchListItem from "../components/SearchListItem";

import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  let [names, setNames] = useState([]);
  let [results, setResults] = useState([]);
  let [search, setSearch] = useState("");
  let [filterState, setFilterState] = useState(false);

  useEffect(() => {
    getNames();
  }, []);

  let getNames = async () => {
    let response = await fetch("/api/pokemon/search/");
    let data = await response.json();
    setNames(data);
    setResults(data);
  };

  let updateNames = async () => {
    let response = await fetch(`/api/pokemon/search2/${search}`);
    let data = await response.json();
    setNames(data);
    setResults(data);
  };

  let handleChange = (value) => {
    let searchResults = [];
    const match = new RegExp(`${value}`, "gi");
    for (let i = 0; i < names.length; i++) {
      if (match.test(names[i][1])) {
        searchResults.push(names[i]);
      }
    }
    setResults(searchResults);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">
          <div className="search">
            <textarea
              onChange={(e) => {
                filterState
                  ? handleChange(e.target.value)
                  : setSearch(e.target.value);
                setSearch(e.target.value);
              }}
            ></textarea>
            <button onClick={() => updateNames()}>
              <FaSearch />
            </button>
            <button
              onClick={() => setFilterState(!filterState)}
              className={filterState ? "filter-active" : "filter-inactive"}
            >
              Filter
            </button>
          </div>
        </h2>
        <p className="notes-count">{results.length}</p>
      </div>
      <div className="notes-list">
        {results.map((element, index) => (
          <SearchListItem key={index} id={element[0]} name={element[1]} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
