import { Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { Root } from "../../../hooks/useFetchPokemon";
import { Progress } from "@chakra-ui/react";

interface IStatsProps {
  pokemon: Root;
}

const progressColor = {
  hp: "green",
  attack: "red",
  defense: "blue",
  "special-attack": "purple",
  "special-defence": "yellow",
  speed: "gray",
};

const Stats = ({ pokemon }: IStatsProps) => {
  return (
    <>
      <Stack gap={4}>
        <Grid templateColumns={"1fr 4fr"} gap={4}>
          {pokemon.stats.map((stat) => {
            console.log(stat.stat.name, "jj");
            return (
              <>
                <GridItem>{stat.stat.name}</GridItem>
                <GridItem>
                  <Flex gap={3}>
                    <Text fontSize={"bold"}>{stat.base_stat}</Text>
                    <Flex flex={1} alignItems={"center"}>
                      <Progress
                        width={"full"}
                        height={1.5}
                        borderRadius={"full"}
                        overflow={"hidden"}
                        value={stat.base_stat}
                        colorScheme={
                          progressColor[
                            stat.stat.name as keyof typeof progressColor
                          ]
                        }
                      />
                    </Flex>
                  </Flex>
                </GridItem>
              </>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default Stats;
