import { useEffect, useState } from "react";

function CharacterCard({
  name,
  height,
  mass,
  hairColor,
  birth,
  speciesArray,
  filmsArray,
  starshipsArray,
}) {
  const [characterFilms, setCharacterFilms] = useState([]);
  const [characterStarships, setCharacterStarships] = useState([]);
  const [characterSpecies, setCharacterSpecies] = useState([]);
  const temporaryFilms = Array.from(new Set(characterFilms));
  const temporaryStarships = Array.from(new Set(characterStarships));
  const temporarySpecies = Array.from(new Set(characterSpecies));
  useEffect(() => {
    filmsArray.forEach((film) => {
      fetch(film)
        .then((response) => response.json())
        .then((data) =>
          setCharacterFilms((characterFilms) => [...characterFilms, data.title])
        );
    });

    starshipsArray.forEach((starship) => {
      fetch(starship)
        .then((response) => response.json())
        .then((data) =>
          setCharacterStarships((characterStarships) => [
            ...characterStarships,
            data.name,
          ])
        );
    });

    if (speciesArray.length > 0) {
      speciesArray.forEach((species) => {
        fetch(species)
          .then((response) => response.json())
          .then((data) =>
            setCharacterSpecies((species) => [...species, data.name])
          );
      });
    }
  }, []);

  const filmsList = temporaryFilms.map((film, i) => {
    return <li key={i}>{film}</li>;
  });

  const starshipsList = temporaryStarships.map((starship, i) => {
    return <li key={i}>{starship}</li>;
  });

  const speciesList = temporarySpecies.map((species, i) => {
    return <h3 key={i}>Species: {species}</h3>;
  });

  return (
    <div className="flex flex-col justify-evenly items-center font-sans text-3xl border-2 rounded-xl hover:shadow-xl p-6 w-full bg-black text-yellow-400">
      <h1 className="font-bold text-6xl">{name}</h1>
      <h3 className="font-semibold text-4xl">Height: {height} cm</h3>
      <h3>Weight: {mass} kg</h3>
      <h3>Hair Color: {hairColor}</h3>
      <h3>Date of Birth: {birth}</h3>
      {speciesList}
      <ul>Films</ul>
      {filmsList}
      <ul>Starships</ul>
      {starshipsList}
    </div>
  );
}

export default CharacterCard;
