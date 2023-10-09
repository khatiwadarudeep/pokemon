import PokemonCard from "../components/PokemonCard";
import { useAppSelector } from "../hooks/redux";

const Team = () => {
  const { team } = useAppSelector((state) => state.team);

  return (
    <>
      {team.map((t) => (
        <PokemonCard pokemon={t} team={true} />
      ))}
    </>
  );
};

export default Team;
