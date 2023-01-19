import { useEffect, useState } from "react";

function Search({ setCharacters }) {
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`https://swapi.dev/api/people/?search=${search}`)
        .then((response) => response.json())
        .then((characters) => setCharacters(characters.results));
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="flex justify-center">
      <input
        className="font-sans font-bold w-96"
        type="search"
        placeholder="Search Star Wars Character Here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
