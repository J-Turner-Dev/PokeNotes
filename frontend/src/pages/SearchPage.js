import { useState, useEffect } from "react";
import SearchListItem from "../components/SearchListItem";

import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  let [names, setNames] = useState([]);
  let [results, setResults] = useState([]);

  useEffect(() => {
    getNames();
  }, []);

  let getNames = async () => {
    let response = await fetch("/api/pokemon/search/");
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
          <FaSearch />{" "}
          <textarea
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          ></textarea>
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
