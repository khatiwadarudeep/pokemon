import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Root } from "../../hooks/useFetchPokemon";
import { PokemonType } from "../../utils/pokemonType";

interface IDetailModalProps {
  title: string;
  pokemon: Root;
  isDetailModalOpen: boolean;
  onDetailModalClose: () => void;
  children?: React.ReactNode;
}

const DetailModal = ({
  title,
  isDetailModalOpen,
  onDetailModalClose,
  pokemon,
}: IDetailModalProps) => {
  const { types } = pokemon;
  const background =
    PokemonType[types[0].type.name as keyof typeof PokemonType];

  return (
    <Modal isOpen={isDetailModalOpen} onClose={onDetailModalClose} size={"4xl"}>
      <ModalOverlay />
      <ModalContent background={background.bg}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={4}>{/* Add your content here */}</ModalBody>
      </ModalContent>
      <Flex
        background={"#fff"} /* Set a different background color if needed */
        minHeight={"200px"} /* Adjust height as needed */
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Add your content here */}
        xdcds
      </Flex>
    </Modal>
  );
};

export default DetailModal;
