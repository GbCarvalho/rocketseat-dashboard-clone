import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Link, Text, VStack } from "@chakra-ui/layout";
import { Menu, MenuItem, MenuList, MenuButton } from "@chakra-ui/menu";
import { HiChevronDown } from "react-icons/hi";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Flex as="header" w="100%" h="20" bg="gray.700" mx="auto">
        <Flex
          w="100%"
          maxW="1366px"
          justifyContent="space-between"
          mx="auto"
          alignItems="center"
          flex="1"
        >
          <Image src="/images/logo.svg" />

          <HStack spacing="6" color="gray.600">
            <Link _hover={{ color: "gray.50" }}>Home</Link>
            <Link _hover={{ color: "gray.50" }}>Perfil</Link>
            <Link _hover={{ color: "gray.50" }}>Discover</Link>
            <Menu placement="bottom" autoSelect={false}>
              <MenuButton as="button" _hover={{ color: "gray.50" }}>
                Ignite
                <Icon as={HiChevronDown} />
              </MenuButton>
              <MenuList bg="gray.700" border="1px">
                <MenuItem _hover={{ color: "gray.50", bg: "gray.600" }}>
                  Higher
                </MenuItem>
                <MenuItem _hover={{ color: "gray.50", bg: "gray.600" }}>
                  React JS
                </MenuItem>
                <MenuItem _hover={{ color: "gray.50", bg: "gray.600" }}>
                  Node JS
                </MenuItem>
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

      <VStack w="100%" maxW="1120px" mx="auto" paddingTop="72px" spacing="8">
        <Flex as="header" w="100%" alignItems="center">
          <Text as="h1" fontSize="4xl" fontWeight="bold" color="white">
            Olá, Gabriel
          </Text>
          <Text ml="4.8rem" lineHeight="2.6rem" color="gray.50">
            Seja bem vindo de volta. <br /> Que tal continuar assistindo sua
            aula de onde parou?
          </Text>
          <Text ml="auto" color="gray.600">
            #NeverStopLearning
          </Text>
        </Flex>
        <Box w="100%">
          <Text>Teste</Text>
        </Box>
      </VStack>
    </Flex>
  );
}
