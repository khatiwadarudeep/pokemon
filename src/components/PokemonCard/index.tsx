import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { Root } from "../../hooks/useFetchPokemon";
import { PokemonType } from "../../utils/pokemonType";
import { getImageURL } from "../../utils/getImage";
import { formatId } from "../../utils/formatId";
import { useDispatch } from "react-redux";
import { addToTeam } from "../../features/teamSlice";
import { useAppSelector } from "../../hooks/redux";
import { AiOutlinePlus } from "react-icons/ai";

interface IPokemonCardProps {
  pokemon: Root;
  team: boolean;
}

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
  const { name, types } = pokemon;
  const background =
    PokemonType[types[0].type.name as keyof typeof PokemonType];
  const typesArray = types.map((t) => t.type.name);
  const teamArray = useAppSelector((state) => state.team);
  const isAlreadyInTeam = teamArray.team.some((t) => t.id === pokemon.id);

  const dispatch = useDispatch();
  const toast = useToast({
    duration: 2000,
    isClosable: true,
    position: "top-right",
  });

  const handleAddToTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (teamArray.team.length === 6) {
      toast({
        title: "Team already full.",
        description: `You have already the maximum members on your team.`,
        status: "error",
      });
      return;
    }
    if (!isAlreadyInTeam) {
      dispatch(addToTeam(pokemon));
      toast({
        title: "Successfully Added",
        description: `${pokemon.name} is added to your team.`,
        status: "success",
      });
    } else
      toast({
        title: "Cannot add to Team",
        description: `${pokemon.name} already exists on your team.`,
        status: "error",
      });
  };

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
      position={"relative"}
      _hover={{
        boxShadow: "none",
        "& img": {
          transform: "scale(1.05)",
          transition: "transform 0.2s ease-in-out",
        },
      }}
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
              key={type}
            >
              {type}
            </Button>
          ))}
        </Flex>

        {!isAlreadyInTeam && (
          <Tooltip label="Add to team">
            <IconButton
              icon={<AiOutlinePlus />}
              aria-label="add-to-team"
              onClick={handleAddToTeam}
              position={"absolute"}
              bottom={4}
              left={4}
              borderRadius={"full"}
            />
          </Tooltip>
        )}
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
