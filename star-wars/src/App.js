import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CharacterList from "./components/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);

  console.log(characters);

  return (
    <div>
      <Header />
      <Search setCharacters={setCharacters} />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
