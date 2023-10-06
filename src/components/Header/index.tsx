import { Flex, Heading } from '@chakra-ui/react';
import { MdCatchingPokemon } from 'react-icons/md'

const Header = () => {
    return (
        <>
            <Flex justifyContent={"center"}>
                <Heading display={"flex"} flexDirection={"row"} color={"#444"} fontSize={"3rem"} fontWeight={800} alignItems={"center"} textDecoration={"underline"}>P<MdCatchingPokemon size={42} />kédex</Heading>
            </Flex >
        </>
    )
}

export default Header;