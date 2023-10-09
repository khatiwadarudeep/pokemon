import { useToast } from "@chakra-ui/react";

interface IShowToastProps {
  title: string;
  description: string;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined
}

export const ShowToast = ({description,status,title}: IShowToastProps) => {
  const toast = useToast();
  return toast({
    title: title,
    description: description,
    status: status,
    duration: 5000,
    isClosable: true,
  });
};
