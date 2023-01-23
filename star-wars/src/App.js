import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CharacterList from "./components/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);

  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetchCharacters();
  // }, []);

  // const fetchCharacters = async () => {
  //   let characterArray = [];
  //   for (let i = 1; i < 10; i++) {
  //     fetch(`https://swapi.dev/api/people/?page=${i}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         characterArray = [...characterArray, ...data.results];
  //       });
  //   }
  //   setCharacters(characterArray);
  //   setLoading(false);
  // };

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
