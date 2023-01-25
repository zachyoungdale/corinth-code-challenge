import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CharacterList from "./components/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("Luke Skywalker");

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?search=${search}`)
      .then((response) => response.json())
      .then((character) => setCharacters(character.results));
  }, []);

  return (
    <div>
      <Header />
      <Search
        setSearch={setSearch}
        search={search}
        setCharacters={setCharacters}
      />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
