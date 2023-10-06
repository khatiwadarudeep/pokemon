import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { Root } from "../../hooks/useFetchPokemon";
import { PokemonType } from "../../utils/pokemonType";
import { getImageURL } from "../../utils/getImage";
import { formatId } from "../../utils/formatId";

interface IPokemonCardProps {
  pokemon: Root;
}

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
  const { name, types } = pokemon;
  const background =
    PokemonType[types[0].type.name as keyof typeof PokemonType];
  const typesArray = types.map((t) => t.type.name);

  return (
    <Flex
      gap={2}
      borderRadius={"3xl"}
      p={6}
      justifyContent={"space-between"}
      height={"300px"}
      background={background.bg}
      color={"#fff"}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
      _hover={{ boxShadow: "none" }}
    >
      <Box>
        <Heading fontSize={"38px"} fontWeight={800}>
          {name}
        </Heading>

        <Flex mt={4} direction={"column"} justifyContent={"start"}>
          {typesArray.map((type) => (
            <Button
              background={background.btn}
              width={"min-content"}
              px={4}
              py={2}
              mt={1}
              borderRadius={"full"}
            >
              {type}
            </Button>
          ))}
        </Flex>
      </Box>
      <Flex
        p={2}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Heading
          position={"absolute"}
          right={"0"}
          top={"0"}
          fontSize={"42px"}
          fontWeight={"800"}
          opacity={0.5}
        >
          {formatId(pokemon?.id)}
        </Heading>
        <Image
          position={"inherit"}
          maxH={"full"}
          maxW={"full"}
          boxSizing="border-box"
          transform={"scale(0.75)"}
          src={getImageURL(pokemon?.id?.toString())}
        />
      </Flex>
    </Flex>
  );
};
export default PokemonCard;
