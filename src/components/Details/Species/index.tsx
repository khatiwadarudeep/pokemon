import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { Root } from "../../../hooks/useFetchPokemon";

interface ISpecies {
  pokemon: Root;
}

const Species = ({ pokemon }: ISpecies) => {
  const { types } = pokemon;
  return (
    <>
      <Stack gap={4}>
        <Grid templateColumns={"1fr 5fr"}>
          <GridItem>
            <Text>Species:</Text>
          </GridItem>
          <GridItem display={"flex"} gap={4}>
            <Text fontWeight={"extrabold"}>
              {types.map((t) => t.type.name).join(", ")}
            </Text>
          </GridItem>
        </Grid>
        <Grid templateColumns={"1fr 5fr"}>
          <GridItem>
            <Text>Height:</Text>
          </GridItem>
          <GridItem display={"flex"} gap={4}>
            <Text fontWeight={"extrabold"}>{`${pokemon.height} cm`}</Text>
          </GridItem>
        </Grid>
        <Grid templateColumns={"1fr 5fr"}>
          <GridItem>
            <Text>Weight:</Text>
          </GridItem>
          <GridItem display={"flex"} gap={4}>
            <Text fontWeight={"extrabold"}>{`${pokemon.weight} kg.`}</Text>
          </GridItem>
        </Grid>
        <Grid templateColumns={"1fr 5fr"}>
          <GridItem>
            <Text>Abilities:</Text>
          </GridItem>
          <GridItem display={"flex"} gap={4}>
            <Text fontWeight={"extrabold"}>
              {pokemon.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </Text>
          </GridItem>
        </Grid>
      </Stack>
    </>
  );
};
export default Species;
