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
    return (
      <h3 key={i} className="font-semibold text-4xl">
        {film}
      </h3>
    );
  });

  const starshipsList = temporaryStarships.map((starship, i) => {
    return (
      <h3 key={i} className="font-semibold text-4xl">
        {starship}
      </h3>
    );
  });

  const speciesList = temporarySpecies.map((species, i) => {
    return (
      <h3 key={i} className="font-semibold text-4xl">
        Species: {species}
      </h3>
    );
  });

  return (
    <div className="flex flex-col items-center justify-evenly font-sans text-3xl rounded-xl hover:shadow-2xl transition ease-in-out delay-50 hover:-translate-y-1 p-8 m-6 w-4/5 bg-black text-yellow-400">
      <h1 className="font-black text-6xl">{name}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-32 mt-10 mb-10">
        <div>
          <h2 className="font-extrabold text-5xl underline mb-2">About</h2>
          <h3 className="font-semibold text-4xl">Height: {height} cm</h3>
          <h3 className="font-semibold text-4xl">Weight: {mass} kg</h3>
          <h3 className="font-semibold text-4xl">Hair Color: {hairColor}</h3>
          <h3 className="font-semibold text-4xl">Date of Birth: {birth}</h3>
          {temporarySpecies.length > 0 ? (
            speciesList
          ) : (
            <h3 className="font-semibold text-4xl">Species: Human</h3>
          )}
        </div>
        <div>
          <h2 className="font-extrabold text-5xl underline mb-2">Films</h2>
          {filmsList}
        </div>
        <div>
          <ul className="font-extrabold text-5xl underline mb-2">Starships</ul>
          {temporaryStarships.length > 0 ? (
            starshipsList
          ) : (
            <p className="font-semibold text-4xl">None</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
