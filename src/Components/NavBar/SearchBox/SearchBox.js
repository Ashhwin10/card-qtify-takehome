import React from "react";
import "../SearchBox/SearchBox.css";
import Searchicon from "@mui/icons-material/Search";

export default function Searchbox() {
  return (
    <>
      <div>
        <input
          placeholder="Search a album of your choice"
          className="searchbox"
        />
        <button className="search-btn">
          <Searchicon />
        </button>
      </div>
    </>
  );
}
