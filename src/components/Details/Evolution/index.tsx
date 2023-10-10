import { Flex, Grid } from "@chakra-ui/react";
import { Root } from "../../../hooks/useFetchPokemon";

interface IEvolutionProps {
  pokemon: Root;
}

const Evolution = ({ pokemon }: IEvolutionProps) => {
  return (
    <>
      <Flex>
        <Grid gap={3} templateColumns={"repeat(3,1fr)"}>
          Evolution of {pokemon.name}
        </Grid>
      </Flex>
    </>
  );
};

export default Evolution;
