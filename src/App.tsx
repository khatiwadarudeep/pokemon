import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Header from "./components/Header";
import { generations } from "./utils/generations";
import SelectionButton from "./components/SelectionButton";
import useFetchPokemon from "./hooks/useFetchPokemon";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PokemonCard from "./components/PokemonCard";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(151);
  const [activeGeneration, setActiveGeneration] = useState("I");
  const { data, loading } = useFetchPokemon(offset, limit);

  const handleButtonClick = (
    newOffset: number,
    newLimit: number,
    generation: string
  ) => {
    setOffset(newOffset);
    setLimit(newLimit);
    setActiveGeneration(generation);
  };

  return (
    <>
      <Box p={4}>
        <Header />
        <Flex justifyContent={"center"}>
          <Heading fontSize={"3xl"} color={"blue.400"} fontWeight={700}>
            Select Generations:
          </Heading>
        </Flex>
        <Grid justifyContent={"center"}>
          <GridItem
            backgroundColor={"#fff"}
            className="selection"
            borderRadius={"md"}
          >
            {generations.map((gen, index) => (
              <SelectionButton
                gen={gen.genString}
                key={index}
                onClick={() =>
                  handleButtonClick(gen.offset, gen.limit, gen.genString)
                }
                isActive={activeGeneration === gen.genString}
              />
            ))}
          </GridItem>
        </Grid>
        {loading ? (
          <Flex
            justifyContent="center"
            mt={4}
            height={"40vh"}
            alignItems={"center"}
          >
            <ClipLoader
              color={"red"}
              loading={loading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Flex>
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={4}
            mt={6}
          >
            {data?.condensedData?.map((pokemon, index) => {
              return (
                <GridItem key={index}>
                  <PokemonCard pokemon={pokemon} />
                </GridItem>
              );
            })}
          </Grid>
        )}
      </Box>
    </>
  );
}

export default App;
