import { Flex, Grid, Text } from "@chakra-ui/react";
import TeamCard from "../components/TeamCard";
import { useAppSelector } from "../hooks/redux";
import { BiSad } from "react-icons/bi";

const Team = () => {
  const { team } = useAppSelector((state) => state.team);

  return (
    <>
      {team.length > 0 ? (
        <Grid templateColumns={"repeat(3, 1fr)"} gap={3}>
          {team.map((t) => (
            <TeamCard pokemon={t} />
          ))}
        </Grid>
      ) : (
        <Flex
          height={"150px"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex direction={"column"} alignItems={"center"}>
            <BiSad size={40} />
            <Text mt={3}>No Members, Please Socialize.</Text>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Team;
