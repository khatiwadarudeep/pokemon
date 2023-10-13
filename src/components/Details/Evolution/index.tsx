import { Flex } from "@chakra-ui/react";
import { Root } from "../../../hooks/useFetchPokemon";

interface IEvolutionProps {
  pokemon: Root;
}

const Evolution = ({ pokemon }: IEvolutionProps) => {
  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} height={"42px"}>
        Evolution of {pokemon.name} cannot be found right now.
      </Flex>
    </>
  );
};

export default Evolution;
