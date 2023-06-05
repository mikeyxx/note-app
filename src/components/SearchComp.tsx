import React from "react";
import { BiSearch } from "react-icons/bi";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComp = ({ setSearch }: Props) => {
  return (
    <main className="searchContainer">
      <input
        type="text"
        placeholder="Search for a note..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <BiSearch className="search" />
    </main>
  );
};

export default SearchComp;
