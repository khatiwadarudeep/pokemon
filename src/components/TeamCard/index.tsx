import { Box, Flex, IconButton, Image, Text, Tooltip } from "@chakra-ui/react";
import { Root } from "../../hooks/useFetchPokemon";
import { getImageURL } from "../../utils/getImage";
import { PokemonType } from "../../utils/pokemonType";
import { RxCross2 } from "react-icons/rx";
import { removeFromTeam } from "../../features/teamSlice";
import { useDispatch } from "react-redux";

interface ITeamCard {
  pokemon: Root;
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const TeamCard = ({ pokemon }: ITeamCard) => {
  const { types } = pokemon;
  const background =
    PokemonType[types[0].type.name as keyof typeof PokemonType];
  const dispatch = useDispatch();

  const imageWidth = "150px";
  const imageHeight = "150px";
  const handleRemoveFromTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(removeFromTeam(pokemon));
  };

  return (
    <Box
      background={background.bg}
      borderRadius={"full"}
      position={"relative"}
      mb={4}
    >
      <Tooltip label="Remove from team">
        <IconButton
          icon={<RxCross2 size={22} color={"#fff"} />}
          aria-label="add-to-team"
          onClick={handleRemoveFromTeam}
          position={"absolute"}
          background={"red.700"}
          top={"0"}
          right={"5"}
          borderRadius={"full"}
        />
      </Tooltip>
      <Flex justifyContent="center">
        <Image
          maxW={imageWidth}
          maxH={imageHeight}
          src={getImageURL(pokemon?.id?.toString())}
          pb={6}
        />
      </Flex>
      <Flex
        justifyContent={"center"}
        position={"absolute"}
        bottom={"-3"}
        width={"100%"}
      >
        <Text
          fontSize={"20px"}
          color={"white"}
          background={background.bg}
          borderRadius={"full"}
          p={"1px 5px 1px 5px"}
        >
          {capitalizeFirstLetter(pokemon.name)}
        </Text>
      </Flex>
    </Box>
  );
};

export default TeamCard;
