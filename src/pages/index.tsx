import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Flex, HStack, Link, Text } from "@chakra-ui/layout";
import { Menu, MenuItem, MenuList, MenuButton } from "@chakra-ui/menu";
import { HiBell, HiChevronDown, HiSearch, HiUserAdd } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Flex w="100%" h="20" bg="gray.700" mx="auto">
        <Flex
          maxW="1366px"
          justifyContent="space-between"
          m="auto"
          alignItems="center"
          flex="1"
        >
          <Image src="/images/logo.svg" />

          <HStack spacing="6" color="rgb(115, 115, 128)">
            <Link _hover={{ color: "gray.50" }}>Home</Link>
            <Link _hover={{ color: "gray.50" }}>Perfil</Link>
            <Link _hover={{ color: "gray.50" }}>Discover</Link>
            <Menu placement="bottom">
              <MenuButton as="button" _hover={{ color: "gray.50" }}>
                Ignite
                <Icon as={HiChevronDown} />
              </MenuButton>
              <MenuList>
                <MenuItem>Higher</MenuItem>
                <MenuItem>React JS</MenuItem>
                <MenuItem>Node JS</MenuItem>
              </MenuList>
            </Menu>
            <Link _hover={{ color: "gray.50" }}>Experts Club</Link>
          </HStack>

          <HStack spacing="4">
            <Button bg="gray.700" _hover={{ bg: "gray.900" }} w="52px" h="52px">
              <Image src="/images/search.svg" h="6" w="6" />
            </Button>
            <Button bg="gray.700" _hover={{ bg: "gray.900" }} w="52px" h="52px">
              <Image src="/images/user-add.svg" h="22px" w="26px" />
            </Button>
            <Button bg="gray.700" _hover={{ bg: "gray.900" }} w="52px" h="52px">
              <Image src="/images/bell.svg" h="6" w="6" color="gray.600" />
            </Button>
            <Flex
              border="2px"
              borderRadius="50"
              h="54px"
              w="54px"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="https://github.com/GbCarvalho.png"
                h="46px"
                w="46px"
                borderRadius="28"
              />
            </Flex>
          </HStack>
        </Flex>
      </Flex>

      <Flex h="100vh" w="100%">
        <Flex maxW="1366px" m="auto">
          <Text as="h1">Olá, Gabriel</Text>
        </Flex>
      </Flex>
    </>
  );
}
