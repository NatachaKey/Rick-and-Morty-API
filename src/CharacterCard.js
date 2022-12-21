function CharacterCard(props) {
  const { character } = props;

  return (<div>
    <img src={character.image} width= "150px" alt="caracter"/>
     <p>Name: {character.name}</p>
     <p>Gender: {character.gender}</p>
     <p>Species: {character.species}</p>
  </div>);
}

export default CharacterCard;
