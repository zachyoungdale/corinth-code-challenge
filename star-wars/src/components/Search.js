import { useEffect, useState } from "react";

function Search({ setSearch, search, setCharacters }) {
  function handleSearch(e) {
    e.preventDefault();
    fetch(`https://swapi.dev/api/people/?search=${search}`).then((res) => {
      res.json().then((character) => {
        if (character.results.length > 0) {
          setCharacters(character.results);
        } else {
          alert("Sorry! Character was not found.");
        }
      });
    });
  }

  return (
    <div className="flex justify-center m-10">
      <form onSubmit={handleSearch} className="flex flex-row">
        <input
          className="font-sans font-bold w-96 p-3 border-4 border-black rounded-lg mr-3 text-3xl"
          type="text"
          placeholder="Luke Skywalker"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button
          type="submit"
          className="font-sans font-bold text-2xl bg-black text-white pr-3 pl-3 rounded-lg hover:-translate-y-1 transition ease-in-out hover:bg-yellow-400 hover:text-white active:bg-yellow-500"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
