import React from "react";
import "./search.css";
const Search = () => {
  return (
    <div className="search-cont">
      <div className="search-div">
        <h1>LOST AND FOUND NEAR YOU</h1>
        <div className="search-box">
          <input type="text" placeholder="What?" className="search-inp" />
          <input type="text" placeholder="Where?" className="search-inp" />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
