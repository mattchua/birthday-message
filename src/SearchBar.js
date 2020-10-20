import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SearchBar(props) {
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <input type="text" className="searchBar" defaultValue={props.value} placeholder="Search by name"/>
      <FontAwesomeIcon
        color="black"
        icon={faSearch}
        style={{ left: "1.3em", verticalAlign: "middle", marginTop:".6em", position: "absolute", pointerEvents: "none" }}
      />
    </div>
  );
}

export default SearchBar;
