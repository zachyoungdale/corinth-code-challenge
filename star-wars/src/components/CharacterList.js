import CharacterCard from "./CharacterCard";
import { useState } from "react";

function CharacterList({ characters }) {
  const characterCards = characters.map((character) => {
    return (
      <CharacterCard
        key={character.name}
        name={character.name}
        height={character.height}
        mass={character.mass}
        hairColor={character.hair_color}
        birth={character.birth_year}
        speciesArray={character.species}
        filmsArray={character.films}
        starshipsArray={character.starships}
      />
    );
  });
  return (
    <div className="flex flex-col justify-center items-center">
      {characterCards}
    </div>
  );
}

export default CharacterList;
