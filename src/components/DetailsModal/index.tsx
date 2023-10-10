import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Root } from "../../hooks/useFetchPokemon";
import { PokemonType } from "../../utils/pokemonType";
import { getImageURL } from "../../utils/getImage";
import Species from "../Details/Species";
import Stats from "../Details/Stats";
import Evolution from "../Details/Evolution";

interface IDetailModalProps {
  title: string;
  pokemon: Root;
  isDetailModalOpen: boolean;
  onDetailModalClose: () => void;
  children?: React.ReactNode;
}

const DetailModal = ({
  isDetailModalOpen,
  onDetailModalClose,
  pokemon,
}: IDetailModalProps) => {
  const { types } = pokemon;
  const typesArray = types.map((t) => t.type.name);
  const background =
    PokemonType[types[0].type.name as keyof typeof PokemonType];
  console.log(pokemon, "here");
  return (
    <Modal isOpen={isDetailModalOpen} onClose={onDetailModalClose} size={"4xl"}>
      <ModalOverlay />
      <ModalContent borderRadius={"35px"} overflow={"hidden"}>
        <ModalHeader background={background.bg} color={"white"}>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody background={background.bg} position="relative" p={0}>
          <Flex
            alignItems={"center"}
            justifyItems={"center"}
            flexDir={"column"}
            px={6}
            py={4}
            marginBottom={"-85px"}
          >
            <Text fontSize={"32px"} fontWeight={700} color="white">
              {pokemon.name}
            </Text>
            <Flex direction={"row"}>
              {typesArray.map((type) => (
                <Button
                  background={background.btn}
                  width={"min-content"}
                  px={4}
                  py={2}
                  mt={1}
                  borderRadius={"full"}
                  key={type}
                  ml={2}
                >
                  {type}
                </Button>
              ))}
            </Flex>

            <Image
              position={"inherit"}
              maxH={"full"}
              maxW={"full"}
              boxSizing="border-box"
              transform={"scale(0.75)"}
              src={getImageURL(pokemon?.id?.toString())}
            />
          </Flex>
          <Box px={6} py={4} background={"white"} borderRadius={"35px"}>
            <Tabs>
              <TabList>
                <Tab>About</Tab>
                <Tab>Basic Stats</Tab>
                <Tab>Evolution</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Species pokemon={pokemon} />
                </TabPanel>
                <TabPanel>
                  <Stats pokemon={pokemon} />
                </TabPanel>
                <TabPanel>
                  <Evolution pokemon={pokemon} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
