import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface IPokemonModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const PokemonModal = ({
  title,
  isOpen,
  onClose,
  children,
}: IPokemonModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>{children}</ModalBody>
        </ModalContent>
      </Modal>
      ;
    </>
  );
};
export default PokemonModal;
