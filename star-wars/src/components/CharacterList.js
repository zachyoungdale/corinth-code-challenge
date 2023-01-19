import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  console.log(characters);
  const people = characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        height={character.height}
        mass={character.mass}
        hairColor={character.hair_color}
        birth={character.birth_year}
      />
    );
  });
  return <div>{people}</div>;
}

export default CharacterList;
