import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "./components/Header";
import { generations } from "./utils/generations";
import SelectionButton from "./components/SelectionButton";
import useFetchPokemon from "./hooks/useFetchPokemon";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PokemonCard from "./components/PokemonCard";
import { RiTeamFill } from "react-icons/ri";
import Team from "./features/Team";
import PokemonModal from "./components/TeamModal";

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

  const handleGenerationClick = (
    newOffset: number,
    newLimit: number,
    generation: string
  ) => {
    setOffset(newOffset);
    setLimit(newLimit);
    setActiveGeneration(generation);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box p={4}>
        <Header />
        <Flex justifyContent={"center"}>
          <Heading fontSize={"3xl"} color={"blue.400"} fontWeight={700}>
            Select Generations:
          </Heading>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          {generations.map((gen, index) => (
            <SelectionButton
              gen={gen.genString}
              key={index}
              onClick={() =>
                handleGenerationClick(gen.offset, gen.limit, gen.genString)
              }
              isActive={activeGeneration === gen.genString}
            />
          ))}
          <Flex justifyContent={"flex-end"}>
            <Tooltip label="My Team">
              <IconButton
                background={"red"}
                icon={<RiTeamFill color={"#fff"} />}
                aria-label="add-to-team"
                onClick={onOpen}
                borderRadius={"full"}
              />
            </Tooltip>
          </Flex>
        </Flex>
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
              size={100}
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
                <>
                  <GridItem key={index} cursor={"pointer"}>
                    <PokemonCard pokemon={pokemon} team={false} />
                  </GridItem>
                </>
              );
            })}
          </Grid>
        )}
      </Box>
      <PokemonModal title="My Team" isOpen={isOpen} onClose={onClose}>
        <Team />
      </PokemonModal>
    </>
  );
}

export default App;
