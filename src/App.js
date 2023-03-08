import "./App.css";
import { Button, ContainerFlex, MediaImg, Text } from "libreria-ui-react";
import { getCharacter } from "./service/api";
import { useEffect, useState } from "react";

function App() {
  const [numChar, setNumChar] = useState(1);
  const [character, setCharacter] = useState("");

  const getInCharacter = async (character) => {
    const response = await getCharacter(character);
    setCharacter(response);
  };

  const handleDecrement = () => {
    setNumChar((prevCount) => prevCount - 1);
  };

  const handleIncrement = () => {
    setNumChar((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    getInCharacter(numChar);
  }, [numChar]);

  return (
    <div className="App">
      <ContainerFlex
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        height="100vh"
        gap="8px"
      >
        <MediaImg
          src={character.image}
          alt={character.name}
          width="200px"
          height="200px"
        />
        <Text component="h3" fontSize="18px" lineHeight="10px">
          {character.name}
        </Text>
        <Text component="p" fontSize="18px" lineHeight="10px">
          {character.id}
        </Text>
        <Text component="p" fontSize="18px" lineHeight="10px">
          {character.species}
        </Text>
        <Text component="p" fontSize="18px" lineHeight="10px">
          {character.status}
        </Text>
        <ContainerFlex
          flexDirection="row"
          justifyContent="center"
          alignContent="center"
          height="40px"
          gap="8px"
        >
          <Button
            onClick={handleDecrement}
            width="150px"
            height="40px"
            bgColor="lightsteelblue"
            bgColorHover="lightcoral"
          >
            {`< Before`}
          </Button>
          <Button
            onClick={handleIncrement}
            width="150px"
            height="40px"
            bgColor="lightsteelblue"
            bgColorHover="lightgreen"
          >
            {`Next >`}
          </Button>
        </ContainerFlex>
      </ContainerFlex>
    </div>
  );
}

export default App;
