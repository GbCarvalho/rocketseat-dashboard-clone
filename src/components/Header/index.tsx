import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Flex, HStack, Link } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { HiChevronDown } from "react-icons/hi";
import { NavBar } from "./NavBar";
import { Profile } from "./Profile";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      bg="gray.700"
      mx="auto"
      boxShadow="rgb(18 18 20) 0px 1rem 2rem"
      position="fixed"
      top="0"
    >
      <Flex
        w="100%"
        maxW="1366px"
        justifyContent="space-between"
        mx="auto"
        alignItems="center"
        flex="1"
      >
        <Image src="/images/logo.svg" />

        <NavBar />

        <Profile />
      </Flex>
    </Flex>
  );
}
