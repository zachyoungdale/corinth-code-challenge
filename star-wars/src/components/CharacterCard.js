function CharacterCard({ name, height, mass, hairColor, birth }) {
  return (
    <div className="flex flex-col justify-center items-center font-sans text-3xl border-2 rounded-xl hover:shadow-xl p-6">
      <h1>{name}</h1>
      <h3>Height: {height} cm</h3>
      <h3>Weight: {mass} kg</h3>
      <h3>Hair Color: {hairColor}</h3>
      <h3>Date of Birth: {birth}</h3>
    </div>
  );
}

export default CharacterCard;
