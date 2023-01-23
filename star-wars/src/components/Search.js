import { useEffect, useState } from "react";

function Search({ setSearch, search, setCharacters }) {
  const [searchLoading, setSearchLoading] = useState(false);
  function handleSearch(e) {
    e.preventDefault();
    setSearchLoading(true);
    fetch(`https://swapi.dev/api/people/?search=${search}`).then((res) => {
      if (res.ok) {
        res.json().then((character) => setCharacters(character.results));
      } else {
        alert("Character not found!");
      }
    });
    //   .then((response) => response.json())
    //   .then((character) => setCharacters(character.results));
    setSearchLoading(false);
  }

  return (
    <div className="flex justify-center m-10">
      <form onSubmit={handleSearch} className="flex flex-row">
        <input
          className="font-sans font-bold w-96 p-3 border-2 mr-3 text-3xl"
          type="text"
          placeholder="Search Star Wars Character Here..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button
          type="submit"
          className="font-sans font-bold text-2xl bg-black text-white pr-3 pl-3 rounded-lg"
        >
          {searchLoading ? "Finding characters" : "Search"}
        </button>
      </form>
    </div>
  );
}

export default Search;
