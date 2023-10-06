import { Button } from "@chakra-ui/react";

interface ISelectionButtonProps {
  gen: string;
  onClick: () => void;
  isActive: boolean;
}

const SelectionButton = ({ gen, onClick, isActive }: ISelectionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        height: "100%",
        padding: { base: "3px 8px", lg: "15px 20px" },
        background: isActive ? "#7C538C" : "none",
        color: isActive ? "#fff" : "none",
      }}
      _hover={{
        boxShadow: isActive
          ? "inset 0px 0px 10px rgba(0, 0, 0, 0.8)"
          : "inset 0px 0px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {gen}
    </Button>
  );
};

export default SelectionButton;
